import sqlite3

table  = sqlite3.connect('users.db')
print(table)
cursor = table.execute("SELECT * FROM sqlite_master WHERE type='table' AND name='users'")
for row in cursor:
    print(row)
cursor1 = table.execute("SELECT username from USERS where username=(?)", ('e',))
print(sum(1 for row in cursor))
print(sum(1 for row in cursor))
print ("Operation done successfully")
table.close()
