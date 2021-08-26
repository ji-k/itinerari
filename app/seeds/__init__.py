from flask.cli import AppGroup
from .users import seed_users, undo_users
from .itineraries import seed_itineraries, undo_itineraries
from .flights import seed_flights, undo_flights
from .rentals import seed_rentals, undo_rentals
from .hotels import seed_hotels, undo_hotels
from .passengers import seed_passengers, undo_passengers
from .guests import seed_guests, undo_guests

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_itineraries()
    seed_flights()
    seed_rentals()
    seed_hotels()
    seed_passengers()
    seed_guests()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_flights()
    undo_rentals()
    undo_itineraries()
    undo_users()
    undo_hotels()
    undo_passengers()
    undo_guests()
    # Add other undo functions here
