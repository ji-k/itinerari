from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('An account with this Email does not exist')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('This account does not exist')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect')


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired('Please enter your email'), Email(), user_exists])
    password = StringField('Password', validators=[
                           DataRequired('Please enter your password'), password_matches])
