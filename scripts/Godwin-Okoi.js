var credentials = `{
    "fullName": "Godwin Okoi",
    "id": "HNG-04855",
    "language": "JavaScript",
    "email": "gordie2u@gmail.com"
}`

var json = JSON.parse(credentials);

function HelloWorld() {
    console.log(`Hello World, this is ${json.fullName} with HNGi7 ID ${json.id} and email ${json.email} using ${json.language} for stage 2 task.`);
}

HelloWorld();
