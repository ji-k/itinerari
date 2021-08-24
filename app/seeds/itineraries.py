from app.models import db, Itinerary


def seed_itineraries():
    seedArray = []

    for item in seedArray:
        db.session.add(item)

    db.session.commit()
