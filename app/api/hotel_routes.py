from flask import Blueprint
from flask_login import current_user
from app.models import Hotel, Itinerary


hotel_routes = Blueprint('hotels', __name__, url_prefix='')

# get all hotels
@hotel_routes.route('/')
def get_hotels():
    all_hotels = Hotel.query
    return {'hotels': [hotel.to_dict() for hotel in all_hotels]}

# get a hotel
@hotel_routes.route('/<int:id>')
def get_hotel(id):
    hotel = Hotel.query.get(id)
    return hotel.to_dict()
