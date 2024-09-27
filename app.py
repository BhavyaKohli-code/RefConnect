from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

@app.route('/api/send-message', methods=['POST'])
def send_message():
    data = request.get_json()

    name = data.get('name')
    company = data.get('company')

    # Compose the message
    message = f"""
Hi {name},

I hope you’re doing well! I’ve been following your work at {company}, and it's clear you're making a big impact. I’m currently pursuing dual degrees in Commerce and Computer Applications, along with certifications in Data Analytics. With strong skills in Python, SQL, Power BI, and Tableau, I’m eager to apply my knowledge to real-world challenges.

{company}’s data-driven approach aligns perfectly with my passion, and I’d love to join the team as a Data Analyst intern. It would be amazing if you could refer me — I’m confident that, with your support, we can create incredible results together at {company}!

Looking forward to connecting.

Best regards,
Bhavya Kohli
"""

    return jsonify({"message": message})

if __name__ == '__main__':
    app.run(debug=True)
