from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Hotel, Itinerary
from app.forms import CreateHotelForm


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

# post a hotel
@hotel_routes.route('/', methods=['POST'])
@login_required
def create_hotel():
    form = CreateHotelForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        hotel = Hotel(
            itinerary_id=data['itinerary_id'],
            property=data['property'],
            address=data['address'],
            city=data['city'],
            state=data['state'],
            zipcode=data['zipcode'],
            notes=data['notes'],
        )
        db.session.add(hotel)
        db.session.commit()
        return hotel.to_dict()
    else:
        return form.errors

# delete a hotel
@hotel_routes.route('/<int:id>',methods=['DELETE'])
@login_required
def delete_hotel(id):
    hotel = Hotel.query.get(id)
    db.session.delete(hotel)
    db.session.commit()
    return {"delete": id}
