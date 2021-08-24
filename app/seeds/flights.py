from app.models import db, Flight


def seed_flights():
    seedArray = []

    seedArray.append(Flight(itinerary_id=1, date="2021, 2, 18", origin="ATL", destination="JFK", departure="0.458333333333333",
                     arrival="0.541666666666667", flight_no="DL 232", notes="Joy is going to drop us off at the airport."))
    seedArray.append(Flight(itinerary_id=2, date="2021, 5, 18", origin="ATL", destination="LAX", departure="0.5",
                     arrival="0.583333333333333", flight_no="DL 494", notes="Your carry on can't be bigger than 22 x 14 x 9"))
    seedArray.append(Flight(itinerary_id=3, date="2021, 6, 20", origin="ATL", destination="LAS", departure="0.604166666666667",
                     arrival="0.666666666666667", flight_no="DL 545", notes="Don't forget to wear a face mask"))
    seedArray.append(Flight(itinerary_id=4, date="2021, 8, 2", origin="ATL", destination="MIA",
                     departure="0.333333333333333", arrival="0.416666666666667", flight_no="DL 278", notes="First Class Gang"))
    seedArray.append(Flight(itinerary_id=1, date="2021, 2, 24", origin="LAS", destination="ATL", departure="0.375",
                     arrival="0.5", flight_no="DL 183", notes="Your carry on can't be bigger than 22 x 14 x 9"))
    seedArray.append(Flight(itinerary_id=2, date="2021, 5, 25", origin="MIA", destination="ATL", departure="0.416666666666667",
                     arrival="0.958333333333333", flight_no="DL 232", notes="Your carry on can't be bigger than 22 x 14 x 9"))

    for item in seedArray:
        db.session.add(item)

    db.session.commit()


def undo_flights():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
