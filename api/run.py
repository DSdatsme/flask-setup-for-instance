from flask import Flask, jsonify, request, json, render_template
from flask_cors import CORS
import subprocess
import os
app = Flask(__name__, template_folder='../ui', static_folder='../ui/assets')


CORS(app)
global users


users = [
]


@app.route("/dashboard")
def dashboard():
    return render_template('dashboard.html')

# Test code
# direct from url(HTTP)
@app.route("/getUser/<id>")
def get_user(id):
    for item in users:
        if int(id) == int(item['id']):
            return jsonify(item)

# Test code
# post request example
@app.route("/postUser", methods=["POST"])
def post_user():
    content = request.get_json()
    users.append(content)
    return "record inserted"

# Add logic here
# get request example
# 127.0.0.0:5000/makeDirectory/my_folder
@app.route("/makeDirectory/<id>", methods=["GET"])
def create_folder(id):
    # a sample method to create folder
    os.system('sudo mkdir '+id)
    return id + "---> folder created"

# Test code
# using variables to get value
# http://127.0.0.1:5000/makeDirectoryByQuery/?query=abcd
@app.route("/makeDirectoryByQuery/", methods=["GET"])
def create_folder_using_query():
    username = request.args.get('query')
    return username + "-----> successfully read query variable"


app.run(host="0.0.0.0", debug=True)  # for accepting requests from internet
