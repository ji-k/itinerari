from app.models import db, Guest


def seed_guests():
    seedArray = []

    seedArray.append(Guest(hotel_id =1, first_name = "Aairah", last_name = "Roman", checkin = "2021, 2, 18", checkout = "2021, 2, 20", confirmation = "8573649274"))
    seedArray.append(Guest(hotel_id =2, first_name = "Dimitri", last_name = "Traynor", checkin = "2021, 5, 18", checkout = "2021, 5, 20", confirmation = "2840327404"))
    seedArray.append(Guest(hotel_id =3, first_name = "Ronaldo", last_name = "Humphreys", checkin = "2021, 6, 20", checkout = "2021, 6, 21", confirmation = "9492437405"))
    seedArray.append(Guest(hotel_id =4, first_name = "Izzie", last_name = "Hassan", checkin = "2021, 8, 2", checkout = "2021, 8, 3", confirmation = "4343902842"))
    seedArray.append(Guest(hotel_id =5, first_name = "Ray", last_name = "Banks", checkin = "2021, 3, 1", checkout = "2021, 3, 7", confirmation = "4938432443"))
    seedArray.append(Guest(hotel_id =6, first_name = "Jamelia", last_name = "Robinson", checkin = "2021, 7, 29", checkout = "2021, 8, 4", confirmation = "2230230283"))

    for item in seedArray:
        db.session.add(item)

    db.session.commit()


def undo_guests():
    db.session.execute('TRUNCATE guests RESTART IDENTITY CASCADE;')
    db.session.commit()
