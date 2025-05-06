from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:3000"])  # Only allow your Next.js frontend
    from .routes import bp
    app.register_blueprint(bp)

    return app
