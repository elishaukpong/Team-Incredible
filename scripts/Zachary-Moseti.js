// echo "Hello World, this is Elisha Ukpong with HNGi7 ID HNG-03659 and email ishukpong418@gmail.com using JavaScript for stage 2 task.";

// define a class to hold intern details
class sayString{
    constructor(name,id,language) {
        this.name = name;
        this.id = id;
        this.language = language;
    }
    // function to output the details

    say() {
        return `Hello World, this is ${ this.name } with HNGi7 ID ${ this.id } using ${ this.language } for stage 2 task.`
    }
}
// create an instance of the class - object

const internDetails = new sayString('Zachary Moseti','HNG-05091','JavaScript');