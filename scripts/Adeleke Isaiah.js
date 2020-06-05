const detail =  {
    name : "Isaiah Adeleke",
    id: "HNG-00931",
    email: "iadeleke01@gmail.com",
    language: "Javascript",
};

(function (data){
    let output= `Hello World, this is ${data.name} with HNGi7 ID ${data.id} and email ${data.email} using ${data.language} for stage 2 task`;
    console.log(output);
})(detail);
