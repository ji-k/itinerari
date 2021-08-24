from .db import db


class Flight(db.Model):
    __tablename__ = 'flights'

    id = db.Column(db.Integer, primary_key=True)
    itinerary_id = db.Column(db.Integer, db.foreign_key(
        'itinerary.id'), nullable=False)
    date = db.Column(db.Datetime, nullable=False)
    origin = db.Column(db.String, nullable=False)
    destination = db.Column(db.String, nullable=False)
    departure = db.Column(db.String, nullable=False)
    arrival = db.Column(db.String, nullable=False)
    airline = db.Column(db.String, nullable=False)
    flight_no = db.Column(db.String, nullable=False)
    notes = db.Column(db.String)

    itinerary_relation = db.relationship(
        'Itinerary', back_populates='flight_relation')
    passengers_relation = db.relationship(
        'Passenger', back_populates='flight_relation')

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
