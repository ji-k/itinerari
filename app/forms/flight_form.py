from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextField
from wtforms.validators import DataRequired, Length

class CreateFlightForm(FlaskForm):
    itinerary_id = IntegerField("itinerary_id", validators=[DataRequired()])
    date = DateField("start_date", validators=[DataRequired('Date is required')])
    origin = StringField("origin", validators=[DataRequired('Origin city is required')])
    destination = StringField("destination", validators=[DataRequired('Destination city is required')])
    departure = StringField("departure", validators=[DataRequired('Departure time is required')])
    arrival = StringField("arrival", validators=[DataRequired('Arrival time is required')])
    airline = StringField("airline", validators=[DataRequired('Name of airline is required')])
    flight_no = StringField("flight_no", validators=[DataRequired('Flight number is required')])
    notes = TextField("notes", validators=[Length(max=250, message='Notes should be less than 250 characters')])
