//Variable declarations
const fullname = "Imiebo Godson";
const id = "HNG-04448";
const email = "imiebo.godson@gmail.com";
const language = "JavaScript";

//Function Outputs The Text
const output = (fullname, id, email, lang) => {
     const message = `Hello World, this is ${fullname} with HNGi7 ID ${id} and email ${email} using ${lang} for stage 2 task.`;

    return message;
};
//Logs The Text In The Console
console.log(output(fullname, id, email, language));