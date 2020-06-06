const data = {
    message: 'Hello World',
    name: 'Fele Omolola',
    id: 'HNG-01729',
    language: 'JavaScript',
    email: 'feleolaifegmail.com',
  };
  
  const { message, name, id, language, email } = data;
  const output = `${message}, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task.`;
  
  console.log(output);
  return output;
