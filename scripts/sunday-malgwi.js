const aboutParticipant = { 
    fullname: 'Sunday Malgwi',
    ID: 'HNG-02189',
    email: 'malgwisunday@gmail.com',
    language: 'JavaScript',
};

function aboutMe () { 
return `Hello World, this is ${aboutParticipant.fullname} with HNGi7 ID ${aboutParticipant.ID} and email ${aboutParticipant.email} using ${aboutParticipant.language} for stage 2 task.`;
}
console.log(aboutMe());
