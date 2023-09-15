import json
from flask import Blueprint, send_from_directory, current_app, jsonify
from app.models import Show, User, Bookmark, Trend
from app.db import get_db
from sqlalchemy.orm import joinedload

bp = Blueprint('home', __name__, url_prefix='/')

@bp.route('/')
def index():
    return send_from_directory('../frontend/build', 'index.html')

@bp.route('/static/css/<path:filename>')
def serve_static_css(filename):
    return send_from_directory('../frontend/build/static/css', filename)

@bp.route('/static/js/<path:filename>')
def serve_static_js(filename):
    return send_from_directory('../frontend/build/static/js', filename)

@bp.route('/static/media/<path:filename>')
def serve_static_media(filename):
    return send_from_directory('../frontend/build/static/media', filename)

@bp.route('/assets/<path:filename>')
def serve_static_assets(filename):
    return send_from_directory('../frontend/build/assets', filename)

@bp.route('/manifest.json')
def serve_manifest():
    with current_app.open_resource('../frontend/build/manifest.json') as f:
        mainifest_data = json.load(f)
    return jsonify(mainifest_data)

@bp.route('/api/shows')
def get_shows_and_trending():
    # query the database to get shows data
    db = get_db()
    shows = db.query(Show).order_by(Show.id).all()

    # convert shows data to a list of dictionaries
    shows_data = [
        {
            'id': show.id,
            'title': show.title,
            'category': show.category,
            'rating': show.rating,
            'year': show.year,
            'regular_small': show.regular_small,
            'regular_med': show.regular_med,
            'regular_lg': show.regular_lg,
            'trending': show.trending,
            'trending_data': show.trending_data
        }
        for show in shows
    ]

    return jsonify({'shows': shows_data})
