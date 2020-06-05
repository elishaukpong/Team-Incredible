
const getDetailsAsString = () => {
  const details = {
    firstName: 'Deji',
    lastName: 'Abiola',
    id: 'HNG-01740',
    email: 'adedejiabiola56@gmail.com',
    lang: 'JavaScript'
  }
  const { firstName, lastName, id, email, lang } = details;
  return `Hello World, this is ${firstName} ${lastName} with HNGi7 ID ${id} and email ${email} using ${lang} for stage 2 task.`
}



console.log(getDetailsAsString())