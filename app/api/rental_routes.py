from flask import Blueprint
from flask_login import current_user
from app.models import Rental, Itinerary


rental_routes = Blueprint('rentals', __name__, url_prefix='')

# get all rentals
@rental_routes.route('/')
def get_rentals():
    all_rentals = Rental.query
    return {'rentals': [rental.to_dict() for rental in all_rentals]}

# get a rental
@rental_routes.route('/<int:id>')
def get_rental(id):
    rental = Rental.query.get(id)
    return rental.to_dict()
