🛒 Amazon Clone
Flask Django Render

Amazon Clone is a full-fledged e-commerce web application built using Flask, featuring user authentication, product management, cart functionality, and secure checkout. It mimics key features of Amazon to provide a seamless shopping experience.

🌟 Features
✅ User Authentication - Register/Login with secure password hashing
✅ Product Catalog - Browse products with categories & search
✅ Shopping Cart - Add/remove items & manage orders
✅ Secure Checkout - Place orders with stored details
✅ User Reviews - Allow customers to leave feedback ✅ Pagination - Products displayed with paginated views
✅ CSRF Protection - Security implemented for safe transactions
✅ Mobile Responsive - Fully responsive design with Bootstrap
✅ Admin Panel - Manage products & users (Future update!)

📸 Screenshots
Home Page	Product Details	Shopping Cart
Home Page	Product Details	Shopping Cart
More screenshots available in the /static/screenshots/ directory!

🛠 Tech Stack
Technology	Usage
Flask	Backend framework
Jinja2	Templating engine
SQLAlchemy	Database
Bootstrap	Frontend styling
JavaScript	Dynamic UI interactions
Render	Deployment
🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/vansh081205/amazon-clone.git
cd Amazon-Clone
2️⃣ Create Virtual Environment & Install Dependencies
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
3️⃣ Set Up the Database
python seed_db.py  # Seeds the database with sample products
4️⃣ Run the Application
python app.py
Your application will be live at http://127.0.0.1:5000/ 🎉

🌐 Deployment (Render)
1️⃣ Install Gunicorn
pip install gunicorn
2️⃣ Create Procfile
gunicorn -w 4 -b 0.0.0.0:8000 app:create_app()
3️⃣ Deploy on Render
Sign up on Render
Create a new Web Service
Connect your GitHub repository
Set the Build Command: pip install -r requirements.txt
Set the Start Command: gunicorn app:create_app()
Click Deploy 🚀
🛠 Troubleshooting
❌ Gunicorn Import Error?

gunicorn.errors.AppImportError: Failed to find attribute 'app' in 'app'.
✅ Fix: Make sure app.py has the following structure:

from flask import Flask

def create_app():
    app = Flask(__name__)
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
❌ Database Not Found?

db.sqlite3 does not exist
✅ Fix: Run python seed_db.py to initialize the database.

🎯 Future Improvements
🚀 Admin Dashboard - Manage products & orders easily 🚀 Payment Gateway - Implement Stripe/PayPal 🚀 Wishlist Feature - Save favorite products

🎉 Contributing
We welcome contributions! Follow these steps:

Fork the repository
Create a new branch (feature-branch)
Commit your changes (git commit -m "Added feature XYZ")
Push to your branch (git push origin feature-branch)
Submit a Pull Request 🚀
📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
💬 Contact
For any queries, feel free to reach out!
📧 Email: VANSH081205@GMAIL.COM
📌 GitHub: VANSH081205

⭐ If you found this project useful, don't forget to give it a star! ⭐
