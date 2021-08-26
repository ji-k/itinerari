from flask import Blueprint
from flask_login import current_user
from app.models import Passenger, Itinerary


passenger_routes = Blueprint('passengers', __name__, url_prefix='')

# get all passengers
@passenger_routes.route('/')
def get_passengers():
    all_passengers = Passenger.query
    return {'passengers': [passenger.to_dict() for passenger in all_passengers]}

# get a passenger
@passenger_routes.route('/<int:id>')
def get_passenger(id):
    passenger = Passenger.query.get(id)
    return passenger.to_dict()
