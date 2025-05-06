from flask import Blueprint, request, jsonify
from .model import load_model_and_predict

bp = Blueprint('routes', __name__)

@bp.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    file = request.files['image']
    prediction = load_model_and_predict(file)

    return jsonify({'prediction': prediction})
