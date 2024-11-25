import sqlite3

table  = sqlite3.connect('users.db')

cursor = table.execute("SELECT username, password from USERS where username=(?)", ('god',))
cursor1 = table.execute("SELECT username from USERS where username=(?)", ('er',))
print(sum(1 for row in cursor))
print(sum(1 for row in cursor))
print ("Operation done successfully")
table.close()
