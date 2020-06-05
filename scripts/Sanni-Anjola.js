const data = {
    name: "Sanni Lateef Anjola",
    email: "sanni.anjola@gmail.com",
    id: "HNG-00645",
    language: "JavaScript",

}

const displayText = ({ name, id, language, email }) => (`Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task.`);
console.log(displayText(data));