const record = {
    name: "Oladayo Egbeyemi",
    lang: "JavaScript",
    id: "HNG-00535",
    email: "dasther@outlook.com"
}

function result(req) {
    const res = `Hello World, this is ${req.name} with HNGi7 ID ${req.id} and email ${req.email} using ${req.lang} for stage 2 task.`;
    console.log(res);
}

result(record);