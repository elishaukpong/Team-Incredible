const userDetails = {
  firstName: "Arafah",
  lastName: "Ogunfemi",
   email: "ayobamiarafat09@gmail.com",
  language: "Javascript",
};

const output = ({ firstName, lastName, id, language, email }) =>
  `Hello World, this is ${firstName} ${lastName} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task.`;

console.log(output(userDetails));
