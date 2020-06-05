const data = {
  message: 'Hello World',
  name: 'Ibrahim Adekunle',
  id: 'HNG-01074',
  language: 'JavaScript',
  email: 'adefemi101@gmail.com',
};

const { message, name, id, language, email } = data;
const output = `${message}, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task.`;

console.log(output);
return output;
