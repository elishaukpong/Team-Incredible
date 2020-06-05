class Info:
  fname = "Ipshita"
  lname = "RoyBurman"
  id = "HNG-06545"
  email = "ipshitarburman@gmail.com"
  language = "Python"
  stage_num = 2

info = Info()
output = "Hello World, this is {} {} with HNGi7 ID {} and email {} using {} for stage {} task.".format(info.fname, info.lname, info.id, info.email, info.language, info.stage_num )
print(output)
