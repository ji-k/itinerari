from .db import db


class Passenger(db.Model):
    __tablename__ = 'passengers'

    id = db.Column(db.Integer, primary_key=True)
    flight_id = db.Column(db.Integer, db.ForeignKey('flights.id'), nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    confirmation = db.Column(db.String, nullable=False)

    # itinerary2 = db.relationship('Itinerary', backref=db.backref('flights'))


    def to_dict(self):
        return {
            'id': self.id,
            'flight_id': self.flight_id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'confirmation': self.confirmation,
        }
