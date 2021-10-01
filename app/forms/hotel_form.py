from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextField
from wtforms.validators import DataRequired, Length

class CreateHotelForm(FlaskForm):
    itinerary_id = IntegerField("itinerary_id", validators=[DataRequired()])
    property = StringField("property", validators=[DataRequired('Property is required')])
    address = StringField("address", validators=[DataRequired('Address is required')])
    city = StringField("city", validators=[DataRequired('City is required')])
    state = StringField("state", validators=[DataRequired('State is required')])
    zipcode = IntegerField("zipcode", validators=[DataRequired('Zipcode is required')])
    notes = TextField("notes", validators=[Length(max=250, message='Notes should be less than 250 characters')])
