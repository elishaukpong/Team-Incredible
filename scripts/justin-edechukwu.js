const person = {
    fullname: 'Justin Eechukwu',
    HNGI7_id: 'HNG-03080',
    language: 'Javascript',
    email: 'rylerkorey@gmail.com',
    details: function(){
                console.log("Hello World, this is "
                 + this.fullname + " with HNGi7 ID "
                  + this.HNGI7_id + " and email " + this.email + 
                  " using JavaScript for stage 2 task."
                  );
    }
}
person.details();