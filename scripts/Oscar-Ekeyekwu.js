const Me = {
  name: 'Oscar Ekeyekwu',
  id: 'HNG-05334',
  email: 'oscarekeyekwu@gmail.com',
  lang: 'JavaScript',
};
((me) => {
  const output = `Hello World, this is ${me.name}  with HNGi7 ID ${me.id} and Email ${me.email} using ${me.lang} for stage 2 task`;
  console.log(output);
})(Me);
