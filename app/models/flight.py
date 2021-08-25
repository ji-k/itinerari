from .db import db


class Flight(db.Model):
    __tablename__ = 'flights'

    id = db.Column(db.Integer, primary_key=True)
    itinerary_id = db.Column(db.Integer, db.ForeignKey(
        'itineraries.id'), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    origin = db.Column(db.String, nullable=False)
    destination = db.Column(db.String, nullable=False)
    departure = db.Column(db.String, nullable=False)
    arrival = db.Column(db.String, nullable=False)
    airline = db.Column(db.String, nullable=False)
    flight_no = db.Column(db.String, nullable=False)
    notes = db.Column(db.String)

    # itinerary2 = db.relationship('Itinerary', backref=db.backref('flights'))


    def to_dict(self):
        return {
            'id': self.id,
            'itinerary_id': self.itinerary_id,
            'date': self.date,
            'origin': self.origin,
            'destination': self.destination,
            'departure': self.departure,
            'arrival': self.arrival,
            'airline': self.airline,
            'flight_no': self.flight_no,
            'notes': self.notes,
        }
