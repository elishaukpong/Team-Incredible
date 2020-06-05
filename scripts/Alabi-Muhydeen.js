function myOutput(){
    myInfo = {
        fullName: "Alabi Muhydeen",
        id : "HNG-05941",
        email:"alabimuhydeen@gmail.com",
        language : "JavaScript"
    };

    return ("Hello world, this is " + 
    myInfo.fullName + 
     " with HNGi7 ID " + myInfo.id + " and email " 
     + myInfo.email +
     " using " + myInfo.language + 
     " for stage 2 task. "
     );

}

console.log(myOutput());
