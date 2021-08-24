from app.models import db, Rental


def seed_rentals():
    seedArray = []

    seedArray.append(Rental(itinerary_id=1, company="Avis", address="473 Argyll Green Drive", city="New York", zipcode="11430, pickup_date = "2021, 2, 18, dropoff_date="2021, 2, 20", pickup_time="0.541666666666667", dropoff_time="0.625", confirmation="F934JFS", notes="Black Cadillac SUV or similar"))
    seedArray.append(Rental(itinerary_id=2, company="Dollar", address="584 Acre Villas Blvd", city="Los Angeles", zipcode="90045, pickup_date = "2021, 5, 18, dropoff_date="2021, 5, 20", pickup_time="0.541666666666667", dropoff_time="0.666666666666667", confirmation="FSDH9DF", notes="Mid-sized sedan"))
    seedArray.append(Rental(itinerary_id=3, company="Enterprise", address="123 Abbey Drive West", city="Las Vegas", zipcode="89119, pickup_date = "2021, 6, 20, dropoff_date="2021, 6, 21", pickup_time="0.583333333333333", dropoff_time="0.708333333333333", confirmation="AHFI94S", notes="Black Cadillac SUV or similar"))
    seedArray.append(Rental(itinerary_id=4, company="Hertz", address="848 Anderson Willows", city="Miami", zipcode="5206, pickup_date = "2021, 8, 2, dropoff_date="2021, 8, 3", pickup_time="0.541666666666667", dropoff_time="0.75", confirmation="DFA0534J", notes="Black Cadillac SUV or similar"))

   for item in seedArray:
        db.session.add(item)

    db.session.commit()


def undo_rentals():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
