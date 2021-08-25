from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, DateField, TextField, SubmitField
from wtforms.validators import DataRequired


class ItineraryForm(FlaskForm):
    owner_id = IntegerField("owner_id")
    title = StringField("title")
    start_date = DateField("start_date")
    image_url = StringField("image_url")
    notes = TextField("notes")
    submit = SubmitField("Submit")
