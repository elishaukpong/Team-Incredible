def detail():
	first_name = "Ayodeji"
	last_name = "Adeoti"
	id = "HNG-04049"
	email = "adeoti.15.jude@gmail.com"
	lang = "Python"

	result = "Hello World, this is {} {} with HNGi7 ID {} and "\
		 "email {} using {} for stage 2 task."\
		 .format(first_name, last_name, id, email, lang)
	print(result)
	return result

detail()
