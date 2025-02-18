from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_wtf.csrf import CSRFProtect

# Initialize extensions
db = SQLAlchemy()
bcrypt = Bcrypt()
csrf = CSRFProtect()

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_secret_key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

    # Initialize extensions with app
    db.init_app(app)
    bcrypt.init_app(app)
    csrf.init_app(app)

    # Import and register Blueprints
    from amazon_clone.routes import main
    app.register_blueprint(main)

    with app.app_context():
        db.create_all()  # Ensure tables are created

    return app