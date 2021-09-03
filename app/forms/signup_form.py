from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo
from app.models import User
import re

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use')


def strong_password(form, field):
    # Checking if password is strong
    password = field.data

    if re.match(r"^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$])[\w\d!@#$]", password):
        return
    else:
        raise ValidationError('Password must contain at least one number, one special character, and have a mixture of uppercase and lowercase letters')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[
            DataRequired('Username is required'),
            Length(min=2, max=40, message='Username must be between 2 and 40 characters'),
            username_exists])
    email = StringField('email', validators=[DataRequired('Email is required'), Email(message='Email is invalid'), Length(max=255, message='Email must be between 1 and 255 characters'), user_exists])
    password = StringField('password', validators=[DataRequired('Password is required'), Length(min=6, message='Password must be at least 6 characters'), strong_password])
    confirm = StringField('confirm', validators=[DataRequired(), EqualTo('password', message='Passwords do not match')])
