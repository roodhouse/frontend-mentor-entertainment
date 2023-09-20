import json
from flask import Blueprint, send_from_directory, current_app, jsonify, request, session
from app.models import Show, User, UserShowBookmark, Trend
from app.db import get_db
from sqlalchemy.orm import joinedload
import sys
from datetime import datetime

current_time = datetime.now()

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

@bp.route('/api/bookmarked')
def get_bookmarked():

    user_id = session.get('user_id')
    db = get_db()

    if user_id is not None:
        
        bookmarked = db.query(UserShowBookmark).filter_by(user_id = user_id).all()
    
        bookmarked_data = []

        for bookmark in bookmarked:
            show = db.query(Show).filter_by(id=bookmark.show_id).first()
            if show:
                bookmark_info = {
                    'id': bookmark.id,
                    'user_id': bookmark.user_id,
                    'show_id': bookmark.show_id,
                    'bookmarked_at': bookmark.bookmarked_at,
                    'show_info': {
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
                }
                bookmarked_data.append(bookmark_info)
        

        return jsonify({'bookmarked': bookmarked_data})
    
    return jsonify({'bookmarked': []})

@bp.route('/api/bookmarked', methods=['POST'])
def new_bookmark():
    data = request.get_json()
    db = get_db()

    try:
        newBookmark = UserShowBookmark(
            user_id = data['userId'],
            show_id = data['showId'],
            bookmarked_at = current_time
        )

        db.add(newBookmark)
        db.commit()
        return jsonify(message = 'Bookmark added'), 200
    except:
        print(sys.exc_info()[0])
        db.rollback()
        return jsonify(message = 'Bookmarked failed'), 500
    
@bp.route('/api/bookmarked/<id>', methods=['DELETE'])
def delete_bookmark(id):
    db = get_db()

    try:
        db.delete(db.query(UserShowBookmark).filter(UserShowBookmark.id == id).one())
        db.commit()
    except:
        print(sys.exc_info()[0])
        db.rollback()
        return jsonify(message = 'Bookmark not found'), 404

    return '', 204


# user routes
@bp.route('/users', methods=['POST'])
def signup():
    data = request.get_json()
    db = get_db()

    try:
        # attempt to create new user
        newUser = User(
            email = data['email'],
            password = data['password']
        )

        # save in db
        db.add(newUser)
        db.commit()
    
    except:
        # insert failed, send error to frontend
        print(sys.exc_info()[0])
        # insert failed so rollback and send error to frontend
        db.rollback()
        return jsonify(message = 'Signup Failed'), 500
    
    session.clear()
    session['user_id'] = newUser.id
    session['loggedIn'] = True
    return jsonify(id = newUser.id)

@bp.route('users/logout', methods=['POST'])
def logout():
    session.clear()
    return '', 204

@bp.route('/users/login', methods=['POST'])
def login():
    data = request.get_json()
    db = get_db()
    
    try:
        user = db.query(User).filter(User.email == data['email']).one()
    except:
        print(sys.exc_info()[0])
        return jsonify(message = 'Incorrect credentials'), 400
    
    if user.verify_password(data['password']) == False:
        return jsonify(message = 'Incorrect credentials'), 400
    
    session.clear()
    session['user_id'] = user.id
    session['loggedIn'] = True

    return jsonify(id = user.id)

# get user info
@bp.route('/api/user', methods=['GET'])
def get_user_info():
    db = get_db()
    # check if user is authenticated
    if 'user_id' in session and session['loggedIn']:
        # retreive user info based on user_id
        user_id = session['user_id']
        user = db.query(User).filter_by(id=user_id).first()

        if user:
            # serialize user info and send back as json
            user_info = {
                'user_id': user.id,
                'email': user.email
            }
            return jsonify(user_info)
        
    # return an error if user is not found
    return jsonify(message='Not Authenticated')