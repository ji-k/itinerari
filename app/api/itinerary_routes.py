from app.models import itinerary
from flask import blueprint
from flask_login import current_user
from ..models import db, Itinerary, Flight, Rental
from app.forms.itinerary_form import ItineraryForm

itinerary_route = Blueprint('itinerary', __name__, url_prefix='')

# get all itineraries
@itinerary_route.route('/api/itineraries/')
def get_itineraries():
    all_itineraries = Itinerary.query(Itinerary.owner_id == current_user.id).all()
    return {'itineraries': [itinerary.to_dict() for itinerary in all_itineraries]}

@itinerary_route.route('/api/itineraries/create/', methods=['POST'])
def create_itinerary():
    form = ItineraryForm()
    data = form.data
    new_itinerary = ItineraryForm(
        title=data['title'],
        start_date=data['start_date'],
        end_date=data['end_date'],
        image_url=data['image_url'],
        notes=data['notes']
    )
    db.session.add(new_itinerary)
    db.session.commit()
    return itinerary.to_dict()


@itinerary_route.route('/api/itineraries/<int:id>', methods=['PUT'])
def edit_itinerary(id):
    form = ItineraryForm()
    existing_itinerary = Itinerary.query.get(id)
    form.populate_obj(existing_itinerary)
    db.session.commit()
    return existing_itinerary.to_dict()

@itinerary_route.route('<int:id>',methods=['DELETE'])
def delete_itinerary(id):
    itinerary = Itinerary.query.get(id)
    db.session.delete(itinerary)
    db.session.commit()

    return itinerary.to_dict
