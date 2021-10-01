from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextField
from wtforms.validators import DataRequired, Length

class CreateRentalForm(FlaskForm):
    itinerary_id = IntegerField("itinerary_id", validators=[DataRequired()])
    company = StringField("company", validators=[DataRequired('Company is required')])
    address = StringField("address", validators=[DataRequired('Address is required')])
    city = StringField("city", validators=[DataRequired('City is required')])
    state = StringField("state", validators=[DataRequired('State is required')])
    zipcode = IntegerField("zipcode", validators=[DataRequired('Zipcode is required')])
    pickup_date = DateField("pickup_date", validators=[DataRequired('Pick Up Date is required')])
    dropoff_date = DateField("dropoff_date", validators=[DataRequired('Drop Off Date is required')])
    pickup_time = StringField("pickup_time", validators=[DataRequired('Pick Up Time is required')])
    dropoff_time = StringField("dropoff_time", validators=[DataRequired('Drop Off Time is required')])
    confirmation = StringField("confirmation", validators=[DataRequired('Confirmation is required')])
    notes = TextField("notes", validators=[Length(max=250, message='Notes should be less than 250 characters')])
