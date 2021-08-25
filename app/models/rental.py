from .db import db


class Rental(db.Model):
    __tablename__ = 'rentals'

    id = db.Column(db.Integer, primary_key=True)
    itinerary_id = db.Column(db.Integer, db.ForeignKey(
        'itineraries.id'), nullable=False)
    company = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    pickup_date = db.Column(db.DateTime, nullable=False)
    dropoff_date = db.Column(db.DateTime, nullable=False)
    pickup_time = db.Column(db.String, nullable=False)
    dropoff_time = db.Column(db.String, nullable=False)
    confirmation = db.Column(db.String, nullable=False)
    notes = db.Column(db.String)

    # itinerary1 = db.relationship('Itinerary', backref=db.backref('rentals'))

    def to_dict(self):
        return {
            'id': self.id,
            'itinerary_id': self.itinerary_id,
            'company': self.company,
            'address': self.address,
            'city': self.city,
            'zipcode': self.zipcode,
            'pickup_date': self.pickup_date,
            'dropoff_date': self.dropoff_date,
            'pickup_time': self.pickup_time,
            'dropoff_time': self.dropoff_time,
            'confirmation': self.confirmation,
            'notes': self.notes,
        }
