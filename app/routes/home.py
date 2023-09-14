import json
from flask import Blueprint, send_from_directory, current_app, jsonify

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
