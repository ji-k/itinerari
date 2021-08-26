from flask import Blueprint
from flask_login import current_user
from app.models import Flight, Itinerary
# from app.forms.flight_form import FlightForm

flight_routes = Blueprint('flights', __name__, url_prefix='')

# get all flights
@flight_routes.route('/')
def get_flights():
    all_flights = Flight.query
    return {'flights': [flight.to_dict() for flight in all_flights]}

# get a flight
@flight_routes.route('/<int:id>')
def get_flight(id):
    flight = Flight.query.get(id)
    return flight.to_dict()
