from .db import db


class Itinerary(db.Model):
    __tablename__ = 'itineraries'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    start_date = db.Column(db.Datetime, nullable=False)
    end_date = db.Column(db.Datetime, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    image_url = db.Column(db.String)
    notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    user_relation = db.relationship(
        'User', back_populates='itineraries_relation')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'owner_id': self.owner_id,
            'image_url': self.image_url,
            'notes': self.notes,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
