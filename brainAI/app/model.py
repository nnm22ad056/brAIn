import numpy as np
import cv2
import tensorflow as tf
from PIL import Image
from io import BytesIO

IMAGE_SIZE = (128, 128)
MODEL_PATH = './app/models/tumor_detection.h5'
model = tf.keras.models.load_model(MODEL_PATH)

def load_model_and_predict(image_file):
    img = Image.open(image_file).convert('RGB')
    img = img.resize(IMAGE_SIZE)
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_array)
    label = np.argmax(prediction)

    return "Tumor Cell" if label == 1 else "Normal Cell"
