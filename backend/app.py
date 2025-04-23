# Part 3: Set Up Flask Backend
from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Do not watch the clock. Do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "The best way to get started is to quit talking and begin doing.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Keep your face always toward the sunshine—and shadows will fall behind you."
]

@app.route("/api/quote")
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(debug=True)
