let profile = {
    fullName:'Tochukwu Okeke',
    ID:'HNG-00219',
    language:'Javascript',
    email:'teeceemum@gmail.com'
}

const details = ({fullName, ID, language,email}) => {
    console.log('Hello World, this is ' + fullName + ' with HNGi7 ID ' + ID + ' and email ' + email + ' using ' + language + ' for stage 2 task.')
}

details(profile)