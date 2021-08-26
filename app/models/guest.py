from .db import db


class Guest(db.Model):
    __tablename__ = 'guests'

    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotels.id'), nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    checkin = db.Column(db.DateTime, default=False)
    checkout = db.Column(db.DateTime, default=False)
    confirmation = db.Column(db.String, nullable=False)

    # itinerary2 = db.relationship('Itinerary', backref=db.backref('flights'))


    def to_dict(self):
        return {
            'id': self.id,
            'hotel_id': self.hotel_id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'checkin': self.checkin,
            'checkout': self.checkout,
            'confirmation': self.confirmation,
        }
