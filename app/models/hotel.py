from .db import db


class Hotel(db.Model):
    __tablename__ = 'hotels'

    id = db.Column(db.Integer, primary_key=True)
    itinerary_id = db.Column(db.Integer, db.ForeignKey('itineraries.id'), nullable=False)
    property = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    notes = db.Column(db.String)

    guests = db.relationship('Guest')
    # itinerary2 = db.relationship('Itinerary', backref=db.backref('flights'))


    def to_dict(self):
        return {
            'id': self.id,
            'itinerary_id': self.itinerary_id,
            'property': self.property,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'zipcode': self.zipcode,
            'notes': self.notes,

            'guest_info': [el.to_dict() for el in self.guests],
        }
