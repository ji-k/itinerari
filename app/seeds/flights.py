from app.models import db, Flight


def seed_flights():
    seedArray = []

    for item in seedArray:
        db.session.add(item)

    db.session.commit()
