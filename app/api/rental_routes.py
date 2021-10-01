from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Rental, Itinerary
from app.forms import CreateRentalForm


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

# post a rental
@rental_routes.route('/', methods=['POST'])
@login_required
def create_rental():
    form = CreateRentalForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        rental = Rental(
            itinerary_id=data['itinerary_id'],
            company=data['company'],
            address=data['address'],
            city=data['city'],
            state=data['state'],
            zipcode=data['zipcode'],
            pickup_date=data['pickup_date'],
            dropoff_date=data['dropoff_date'],
            pickup_time=data['pickup_time'],
            dropoff_time=data['dropoff_time'],
            confirmation=data['confirmation'],
            notes=data['notes'],
        )
        db.session.add(rental)
        db.session.commit()
        return rental.to_dict()
    else:
        return form.errors

# delete a rental
@rental_routes.route('/<int:id>',methods=['DELETE'])
@login_required
def delete_rental(id):
    rental = Rental.query.get(id)
    db.session.delete(rental)
    db.session.commit()
    return {"delete": id}
