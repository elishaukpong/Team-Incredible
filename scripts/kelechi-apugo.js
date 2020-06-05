const myData = {
    firstName: 'Kelechi',
    lastName : 'Apugo',
    email :'laviedegeorge1292@gmail.com',
    internId :'HNG-06129',
    scriptingLanguage:'Javascript'
}

const showInfo = ({firstName, lastName, email, internId, scriptingLanguage})=>{
    const info = `Hello World, this is ${firstName} ${lastName} with HNGi7 ID ${internId} and email ${email} using ${scriptingLanguage} for stage 2 task`;
    return info;
}

console.log(showInfo(myData));