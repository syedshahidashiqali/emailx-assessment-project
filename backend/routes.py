
from flask import Flask, jsonify, render_template
from flask_cors import CORS
import json
from ai_coach import generate_campaign_suggestion

app = Flask(__name__)
CORS(app)


# Load contacts from JSON file
with open("data/contacts.json") as f:
    contacts = json.load(f)


@app.route('/')
def index():
    return render_template('index.html', contacts=contacts)

@app.route("/contacts")
def get_contacts():
    return jsonify(contacts)


@app.route("/suggest/<int:contact_id>")
def suggest_campaign(contact_id):
    contact = next((c for c in contacts if c["id"] == contact_id), None)
    if not contact:
        return jsonify({"error": "Contact not found"}), 404

    suggestion = generate_campaign_suggestion(contact)
    return jsonify(suggestion)



if __name__ == "__main__":
    app.run(debug=True)
