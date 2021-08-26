from app.models import db, Passenger


def seed_passengers():
    seedArray = []

    seedArray.append(Passenger(flight_id =1, first_name = "Aairah", last_name = "Roman", confirmation = "F83HS7"))
    seedArray.append(Passenger(flight_id =3, first_name = "Ronaldo", last_name = "Humphreys", confirmation = "KLS3J5"))
    seedArray.append(Passenger(flight_id =4, first_name = "Izzie", last_name = "Hassan", confirmation = "JSIS9D"))
    seedArray.append(Passenger(flight_id =5, first_name = "Ray", last_name = "Banks", confirmation = "JDS078"))
    seedArray.append(Passenger(flight_id =6, first_name = "Jamelia", last_name = "Robinson", confirmation = "1JLD0D"))

    for item in seedArray:
        db.session.add(item)

    db.session.commit()


def undo_passengers():
    db.session.execute('TRUNCATE passengers RESTART IDENTITY CASCADE;')
    db.session.commit()
