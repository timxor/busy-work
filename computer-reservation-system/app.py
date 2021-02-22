from flask import Flask, request, jsonify, make_response

from datetime import datetime

app = Flask(__name__)


@app.route('/')
def concierge_service():
    return 'Welcome to the Maven Concierge Service. Send requests to: create_appointment. Retreive appointments from: get_appoinatments'


@app.route("/create_appointment", methods=["POST"])
def create_appointment():

    if request.is_json:

        req = request.get_json()

        return "Created appointment successfully. Response 200.", 200

    else:

        return "Invalid input, not JSON. Response 400.", 400


"""
  get_appoinatments()
"""
@app.route("/get_appoinatments", methods=["GET"])
def get_appointments():

    if request.is_json:

        req = request.get_json()

        return "Created appointment successfully. Response 200.", 200

    else:

        return "Invalid input, not JSON. Response 400.", 400


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')









"""



UserID Object:
  - String Name : Tim
  - String UserID: tim@acceptanceai.com
  - Boolean DoubleBooked: False
  - Array[] Appointments: AppointmentList





Appointment Object:
  - String AppointmentID: 1234
  - String Paitent: Tim
  - String Practitioner: Lilly
  - String timedate: now



"""
