from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextField
from wtforms.validators import DataRequired, Length

class CreateFlightForm(FlaskForm):
    itinerary_id = IntegerField("itinerary_id", validators=[DataRequired()])
    date = DateField("start_date", validators=[DataRequired('Date is required')])
    origin = StringField("origin", validators=[DataRequired('Origin city is required'), Length(max=75)])
    destination = StringField("destination", validators=[DataRequired('Destination city is required'), Length(max=100)])
    departure = StringField("departure", validators=[DataRequired('Departure time is required')])
    arrival = StringField("arrival", validators=[DataRequired('Arrival time is required')])
    airline = StringField("airline", validators=[DataRequired('Name of airline is required'), Length(max=50)])
    flight_no = StringField("flight_no", validators=[DataRequired('Flight number is required'), Length(max=25)])
    notes = TextField("notes", validators=[Length(max=250, message='Notes should be less than 250 characters')])
