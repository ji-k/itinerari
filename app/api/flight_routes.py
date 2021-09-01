from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Flight
from app.forms import CreateFlightForm

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

# post a flight
@flight_routes.route('/', methods=['POST'])
@login_required
def create_flight():
    form = CreateFlightForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("******** before validation ***")
    if form.validate_on_submit():
        data = form.data
        print("******", data)
        flight = Flight(
            itinerary_id=data['itinerary_id'],
            date=data['date'],
            origin=data['origin'],
            destination=data['destination'],
            departure=data['departure'],
            arrival=data['arrival'],
            airline=data['airline'],
            flight_no=data['flight_no'],
            notes=data['notes'],
        )
        db.session.add(flight)
        db.session.commit()
        return flight.to_dict()
    else:
        print("*******", form.errors)
        return form.errors

# delete a flight
@flight_routes.route('/<int:id>',methods=['DELETE'])
@login_required
def delete_flight(id):
    flight = Flight.query.get(id)
    db.session.delete(flight)
    db.session.commit()
    return {"delete": id}
