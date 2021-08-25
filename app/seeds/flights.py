from app.models import db, Flight


def seed_flights():
    seedArray = []

    seedArray.append(Flight(itinerary_id=1, date="2021, 2, 18", origin="ATL", destination="JFK", departure="8:00 AM",
                     arrival="9:00 PM", airline="Delta", flight_no="DL 232", notes="Joy is going to drop us off at the airport."))
    seedArray.append(Flight(itinerary_id=2, date="2021, 5, 18", origin="ATL", destination="LAX", departure="7:30 AM",
                     arrival="10:00 AM", airline="Delta", flight_no="DL 494", notes="Your carry on can't be bigger than 22 x 14 x 9"))
    seedArray.append(Flight(itinerary_id=3, date="2021, 6, 20", origin="ATL", destination="LAS", departure="6:30 AM",
                     arrival="2:00 PM", airline="Delta", flight_no="DL 545", notes="Don't forget to wear a face mask"))
    seedArray.append(Flight(itinerary_id=4, date="2021, 8, 2", origin="ATL", destination="MIA",
                     departure="3:00 PM", airline="Delta", arrival="9:00 AM", flight_no="DL 278", notes="First Class Gang"))
    seedArray.append(Flight(itinerary_id=1, date="2021, 2, 24", origin="LAS", destination="ATL", departure="9:04 AM",
                     arrival="4:00 PM", airline="Delta", flight_no="DL 183", notes="Your carry on can't be bigger than 22 x 14 x 9"))
    seedArray.append(Flight(itinerary_id=2, date="2021, 5, 25", origin="MIA", destination="ATL", departure="10:00 AM",
                     arrival="4:39 PM", airline="Delta", flight_no="DL 232", notes="Your carry on can't be bigger than 22 x 14 x 9"))

    for item in seedArray:
        db.session.add(item)

    db.session.commit()


def undo_flights():
    db.session.execute('TRUNCATE flights RESTART IDENTITY CASCADE;')
    db.session.commit()
