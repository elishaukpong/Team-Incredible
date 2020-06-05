# create user variables and assign values
fullName = 'George Owoicho'
hng_id = 'HNG-06105'
email ='owoichogeorge4400@gmail.com'
language = 'Python'

# create a python dictionary to hold the user details
def interndata(name, hngId, email, language):
    return print ('Hello World, this is {name} with HNGI7 ID: {hngId} and email {email} using {language} for stage 2 task.'.format(name=name, hngId=hngId, email=email, language=language))

if __name__ == '__main__':
    interndata(fullName, hng_id, email, language)