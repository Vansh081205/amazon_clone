from flask import Blueprint, render_template, redirect, url_for, flash, session
from .models import db, User, Product
from .forms import RegistrationForm, LoginForm
from flask_bcrypt import generate_password_hash, check_password_hash

main = Blueprint('main', __name__)

@main.route('/')
@main.route('/home')
def home():
    products = Product.query.all()
    return render_template('home.html', products=products)

@main.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash("Registration successful! Please log in.", "success")
        return redirect(url_for('main.login'))
    return render_template('register.html', form=form)

@main.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and check_password_hash(user.password, form.password.data):
            session['user_id'] = user.id
            flash("Login successful!", "success")
            return redirect(url_for('main.home'))
        else:
            flash("Invalid email or password!", "error")
    return render_template('login.html', form=form)

@main.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('main.home'))

@main.route('/cart')
def cart():
    return render_template("cart.html")