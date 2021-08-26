from flask import Blueprint
from flask_login import current_user
from app.models import Guest, Itinerary


guest_routes = Blueprint('guests', __name__, url_prefix='')

# get all guests
@guest_routes.route('/')
def get_guests():
    all_guests = Guest.query
    return {'guests': [guest.to_dict() for guest in all_guests]}

# get a guest
@guest_routes.route('/<int:id>')
def get_guest(id):
    guest = Guest.query.get(id)
    return guest.to_dict()
