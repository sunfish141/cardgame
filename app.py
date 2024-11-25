import sqlite3
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from datetime import datetime, date
import requests
table = sqlite3.connect('users.db')
print(table)

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
    print(name)
    nameexists = table.execute('SELECT username FROM users WHERE usernanme = (?)', (name,))
    if sum(1 for row in nameexists) > 0:
        return('user already exists')#make frontend submit request
    else:
        table.execute("INSERT INTO USERS(USERNAME, PASSWORD) \
                      Values((?, ?))", (name, password))


if __name__ == '__main__':
    app.run(debug=True)