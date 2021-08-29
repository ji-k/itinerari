from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Itinerary
from ..forms import ItineraryForm

itinerary_routes = Blueprint('itineraries', __name__, url_prefix='')

# get all itineraries
@itinerary_routes.route('/')
@login_required
def get_itineraries():
    all_itineraries = Itinerary.query.all()
    # all_itineraries = Itinerary.query(Itinerary.owner_id == current_user.id).all()
    # return {'itineraries': [itinerary.to_dict() for itinerary in all_itineraries]}
    return {'itineraries': {itinerary.id: itinerary.to_dict() for itinerary in all_itineraries}}

# get an itinerary
@itinerary_routes.route('/<int:id>')
@login_required
def get_itinerary(id):
    itinerary = Itinerary.query.get(id)
    return itinerary.to_dict()

# create an itinerary
@itinerary_routes.route('/create/', methods=['POST'])
@login_required
def create_itinerary():
    print('----YERRRRTLFJKLSFJDKLSFJ')
    form = ItineraryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    print('OKAY BRANDON',data)
    if form.validate_on_submit():
        itinerary = Itinerary(
            title=data['title'],
            start_date=data['start_date'],
            end_date=data['end_date'],
            image_url=data['image_url'],
            owner_id=data['owner_id'],
            notes=data['notes']
        )
        db.session.add(itinerary)
        db.session.commit()
    return itinerary.to_dict()

# edit an itinerary
@itinerary_routes.route('/<int:id>/edit/', methods=['POST'])
@login_required
def edit_itinerary(id):
    title = request.form['title']
    start_date = request.form["start_date"]
    # print("du du du dud ud ud du 777789Q1382094820343948239048290482390482904823904803498239048390", start_date)
    end_date = request.form["end_date"]
    image_url = request.form["image_url"]
    notes = request.form["notes"]
    itinerary = Itinerary.query.get(id)
    itinerary.title = title
    itinerary.start_date = start_date
    itinerary.end_date = end_date
    itinerary.image_url = image_url
    itinerary.notes = notes
    db.session.commit()
    return 'edit'

# delete an itinerary
@itinerary_routes.route('<int:id>',methods=['DELETE'])
@login_required
def delete_itinerary(id):
    itinerary = Itinerary.query.get(id)
    db.session.delete(itinerary)
    db.session.commit()
    return itinerary.to_dict
