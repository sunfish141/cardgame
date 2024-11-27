import sqlite3
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from datetime import datetime, date
import requests

currentuser = None
app = Flask(__name__)

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route('/', methods = ['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('username')#injection?
    password = request.form.get('password')
    table = sqlite3.connect('users.db')
    nameexists = table.execute('SELECT username FROM users WHERE username=(?)', (str(name,)))
    print(sum(1 for row in nameexists))
    if sum(1 for row in nameexists) > 0:
        globals()[currentuser] = name
        table.close()
        return('Logged in')#make frontend submit request
    else:
        table.execute("INSERT INTO USERS(USERNAME, PASSWORD) \
                      Values(?, ?)", (str(name), str(password)))#run cd cardgaem
        globals()[currentuser] = name
        table.close()
        return 'User created'

@app.route("/create", methods=["GET"])
def create():
    return render_template('create.html')

if __name__ == '__main__':
    app.run(debug=True)