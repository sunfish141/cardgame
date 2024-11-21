import sqlite3
import flask
table = sqlite3.connect('users.db')

app = flask.Flask(__name__)

app.route('/')
def hello():
    return'<p>e</p>'