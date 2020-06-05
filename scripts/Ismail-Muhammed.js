const myTask = () => {
    const aboutMe = {
            full_name: 'Ismail Muhammed',
            HNG_ID: 'HNG-04653',
            email: 'ismailmuhammed2019@gmail.com',
            language: 'JavaScript',
    };
    return `Hello World, this is ${aboutMe.full_name} with HNGi7 ID ${aboutMe.HNG_ID} and email ${aboutMe.email} using ${aboutMe.language} for stage 2 task.`;
};

console.log(myTask());
