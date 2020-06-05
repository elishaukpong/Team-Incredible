#Pranay-Yenagandula 

class display_text:
    def __init__(self):
        self.my_name="Pranay Yenagandula"
        self.my_id="HNG-01542"
        self.my_email="pranay41@gmail.com"
        self.my_language="Python"
        
    def show(self):
        self.output="Hello World, this is {} with HNGi7 ID {} and email {} using {} for stage 2 task.".format(self.my_name,self.my_id,self.my_email,self.my_language)
        print(self.output)

d=display_text()
d.show()