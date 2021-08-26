from flask import Blueprint
from flask_login import current_user
from app.models import Itinerary
from app.forms.itinerary_form import ItineraryForm

itinerary_routes = Blueprint('itineraries', __name__, url_prefix='')

# get all itineraries
@itinerary_routes.route('/')
def get_itineraries():
    all_itineraries = Itinerary.query.all()
    # all_itineraries = Itinerary.query.filter(Itinerary.owner_id == current_user.id).all()
    return {'itineraries': [itinerary.to_dict() for itinerary in all_itineraries]}

# get an itinerary
@itinerary_routes.route('/<int:id>')
def get_itinerary(id):
    itinerary = Itinerary.query.get(id)
    return itinerary.to_dict()
