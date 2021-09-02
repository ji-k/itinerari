from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, DateField, IntegerField, TextField
from wtforms.validators import DataRequired, Length


class CreateItineraryForm(FlaskForm):
    title = StringField("title", validators=[DataRequired('Title is required'), Length(min=1, max=50, message='Title must be between 1 and 50 characters')])
    start_date = DateField("start_date", validators=[DataRequired('Date is required')])
    end_date = DateField("end_date", validators=[DataRequired('Date is required')])
    owner_id = IntegerField("owner_id", validators=[DataRequired()])
    image_url = StringField("image_url", validators=[FileAllowed(['png', 'jpg', 'jpeg'])])
    notes = TextField("notes", validators=[Length(max=250, message='Notes must be fewer than 250 characters')])
