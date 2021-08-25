from app.models import db, User



def seed_users():
    ji = User(
        username='ji', email='jikyung@gmail.com', password='hire_me')
    guineapig = User(
        username='guineapig', email='o@o.com', password='password')

    db.session.add(ji)
    db.session.add(guineapig)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
