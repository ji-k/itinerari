from app.models import db, Rental


def seed_rentals():
    seedArray = []

    for item in seedArray:
        db.session.add(item)

    db.session.commit()
