from flask_wtf import FlaskForm
from wtforms import StringField, DateField, TextField, SubmitField
from wtforms.validators import DataRequired


class ItineraryForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    start_date = DateField("start_date", validators=[DataRequired()])
    end_date = DateField("end_date", validators=[DataRequired()])
    image_url = StringField("image_url")
    notes = TextField("notes")
    # submit = SubmitField("Submit")
