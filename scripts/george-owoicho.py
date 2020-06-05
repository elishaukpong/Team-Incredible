# calll up the json module
import json

# create user variables and assign values
name= "George Owoicho"
id= "HNG-06105"
email="owoichogeorge4400@gmail.com"

# create a python dictionary to hold the user details
def interndata():
    userdetails = json.dumps("Hello World, this is "+name+" with HNGI7 ID: "+id+" and email "+email+" using Python for stage 2 task.")
    print (userdetails)
interndata()
