from flask import Blueprint
from flask_login import current_user
from app.models import db, Itinerary
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

# edit an itinerary
@itinerary_routes.route('/api/itineraries/create/', methods=['POST'])
def create_itinerary():
    form = ItineraryForm()
    data = form.data
    itinerary = ItineraryForm(
        title=data['title'],
        start_date=data['start_date'],
        end_date=data['end_date'],
        image_url=data['image_url'],
        notes=data['notes']
    )
    db.session.add(itinerary)
    db.session.commit()
    return itinerary.to_dict()

# delete an itinerary
@itinerary_routes.route('<int:id>',methods=['DELETE'])
def delete_itinerary(id):
    itinerary = Itinerary.query.get(id)
    db.session.delete(itinerary)
    db.session.commit()
    return itinerary.to_dict
