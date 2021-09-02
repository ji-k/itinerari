from app.models import db, Rental


def seed_rentals():
    seedArray = []

    seedArray.append(Rental(itinerary_id=1, company="Avis", address="473 Argyll Green Drive", city="New York", state="NY", zipcode="11430", pickup_date = "2021, 2, 18,", dropoff_date="2021, 2, 20", pickup_time="8:00 AM", dropoff_time="10:00 AM", confirmation="F934JFS", notes="Black Cadillac SUV or similar"))
    seedArray.append(Rental(itinerary_id=2, company="Dollar", address="584 Acre Villas Blvd", city="Los Angeles", state="CA", zipcode="90045", pickup_date = "2021, 5, 18,", dropoff_date="2021, 5, 20", pickup_time="10:30 AM", dropoff_time="1:00 PM", confirmation="FSDH9DF", notes="Mid-sized sedan"))
    seedArray.append(Rental(itinerary_id=3, company="Enterprise", address="123 Abbey Drive West", city="Las Vegas", state="NV", zipcode="89119", pickup_date = "2021, 6, 20,", dropoff_date="2021, 6, 21", pickup_time="3:00 PM", dropoff_time="3:00 PM", confirmation="AHFI94S", notes="Black Cadillac SUV or similar"))
    seedArray.append(Rental(itinerary_id=4, company="Hertz", address="848 Anderson Willows", city="Miami", state="FL", zipcode="5206", pickup_date = "2021, 8, 2,", dropoff_date="2021, 8, 3", pickup_time="2:00 PM", dropoff_time="1:30 PM", confirmation="DFA0534J", notes="Black Cadillac SUV or similar"))

    for item in seedArray:
        db.session.add(item)

    db.session.commit()


def undo_rentals():
    db.session.execute('TRUNCATE rentals RESTART IDENTITY CASCADE;')
    db.session.commit()
