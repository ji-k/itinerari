from app.models import db, Itinerary
from datetime import datetime


def seed_itineraries():
    seedArray = []

    seedArray.append(Itinerary(title="Family Reunion", start_date="2021, 2, 18", end_date="2021, 2, 24", owner_id=1, image_url="https://github.com/ji-k/itinerari/blob/main/assets/images/1.jpg",
                     notes="The other half of the group who are not on this itinerary are staying at an airbnb.", created_at=datetime.now(), updated_at=datetime.now()))
    seedArray.append(Itinerary(title="Girl's Trip", start_date="2021, 5, 18", end_date="2021, 5, 25", owner_id=2, image_url="https://github.com/ji-k/itinerari/blob/main/assets/images/2.jpg",
                     notes="Don't forget to pack for the beach! We are also going hiking on Monday.", created_at=datetime.now(), updated_at=datetime.now()))
    seedArray.append(Itinerary(title="A Weekend in Vegas!", start_date="2021, 6, 20", end_date="2021, 6, 24", owner_id=1,
                     image_url="https://github.com/ji-k/itinerari/blob/main/assets/images/3.jpg", notes="Be prepared.", created_at=datetime.now(), updated_at=datetime.now()))
    seedArray.append(Itinerary(title="Miami Girl's Trip", start_date="2021, 8, 2", end_date="2021, 8, 6", owner_id=1, image_url="https://github.com/ji-k/itinerari/blob/main/assets/images/4.jpg",
                     notes="We have reservations at Barton G on Friday night!", created_at=datetime.now(), updated_at=datetime.now()))

    for item in seedArray:
        db.session.add(item)

    db.session.commit()


def undo_itineraries():
    db.session.execute('TRUNCATE itineraries RESTART IDENTITY CASCADE;')
    db.session.commit()
