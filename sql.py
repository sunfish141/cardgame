import sqlite3

table  = sqlite3.connect('users.db')

table.execute("""CREATE TABLE USERS
            (username TEXT NOT NULL,
            password TEXT NOT NULL,
            elo INT NOT NULL);""")