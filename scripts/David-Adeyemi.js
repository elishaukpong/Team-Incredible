 function Internship(name, hngid, email, language){
    this.myName=name;
    this.hngid = hngid;
    this.language=language;
    this.email=email;
  }
  function HelloHNG(name, id, email, language){
    console.log(`Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task.`)
  }
  let Name="David Adeyemi";
  let id="HNG-02801";
  let language="JavaScript";
  let email="pharmdave2009@gmail.com";
  let internship=new Internship(Name, id, email, language);
  HelloHNG(internship.myName, internship.hngid, internship.email, internship.language);
  