class HNGI_Team():
    def __init__(self):
        super().__init__()
        self.fullname="Kirezi Cyisa Fidele"
        self.id="HNG-03961"
        self.language="Python"
        self.email="fihacker000@gmail.com"

    def fidele(self):
        print("Hello World, this is " + self.fullname + " with HNGi7 ID " + self.id + " and email " + self.email + " using " + self.language + " for stage 2 task")


get_data=HNGI_Team()
get_data.fidele()