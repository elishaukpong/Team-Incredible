const userDetails = {
  firstName: "Arafah",
  lastName: "Ogunfemi",
  hid: "HNG-05018",
  email: "ayobamiarafat09@gmail.com",
  language: "Javascript",
};

const output = ({ firstName, lastName, hid, language, email }) =>
  `Hello World, this is ${firstName} ${lastName} with HNGi7 ID ${hid} and email ${email} using ${language} for stage 2 task.`;

console.log(output(userDetails));
