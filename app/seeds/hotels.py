from app.models import db, Hotel


def seed_hotels():
    seedArray = []

    seedArray.append(Hotel(itinerary_id =1, property = "The London West Hollywood at Beverly Hills", address = "1020 N San Vicente Blvd", city = "West Hollywood", state = "CA", zipcode = "90069", notes  = "All of our rooms are on the same floor"))
    seedArray.append(Hotel(itinerary_id =2, property = "Conrad New York Downtown", address = "102 North End Ave, New York", city = "New York", state = "NY", zipcode = "10282", notes  = "Meet in the lobby at 6 PM for dinner"))
    seedArray.append(Hotel(itinerary_id =3, property = "Montrose West Hollywood", address = "900 Hammond St", city = "West Hollywood", state = "CA", zipcode = "90069", notes  = "This hotel is walking distance from the best pizza place! It is right across the street."))
    seedArray.append(Hotel(itinerary_id =4, property = "Dream Hollywood", address = "6417 Selma Ave", city = "Hollywood", state = "CA", zipcode = "90028", notes  = "Room service is available 24 hours!"))
    seedArray.append(Hotel(itinerary_id =1, property = "Baccarat Hotel", address = "28 W 53rd St", city = "New York", state = "NY", zipcode = "10019", notes  = "Our ride is picking us up at 9 PM from the hotel"))
    seedArray.append(Hotel(itinerary_id =2, property = "Fontainebleau Miami Beach", address = "4441 Collins Ave", city = "Miami Beach", state = "FL", zipcode = "33140", notes  = "Jet skis in the morning!"))

    for item in seedArray:
        db.session.add(item)

    db.session.commit()


def undo_hotels():
    db.session.execute('TRUNCATE hotels RESTART IDENTITY CASCADE;')
    db.session.commit()
