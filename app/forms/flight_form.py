from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextField, SubmitField
from wtforms.validators import DataRequired

class CreateFlightForm(FlaskForm):
    date = DateField("start_date", validators=[DataRequired()])
    origin = StringField("origin", validators=[DataRequired()])
    destination = StringField("destination", validators=[DataRequired()])
    departure = StringField("departure", validators=[DataRequired()])
    arrival = StringField("arrival", validators=[DataRequired()])
    airline = StringField("airline", validators=[DataRequired()])
    flight_no = StringField("flight_no", validators=[DataRequired()])
    notes = TextField("notes")
