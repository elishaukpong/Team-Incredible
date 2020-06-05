const myOutput = () => {
  const myHngData = {
    name: "Oluwatosin Jimoh",
    language: "Javascript",
    id: "HNG-00977",
    email: "jayoluwatosin@gmail.com"
  };
  return `Hello World, this is ${myHngData.name} with HNGi7 ID ${myHngData.id} and email ${myHngData.email} using ${myHngData.language} for stage 2 task.`
}

console.log(myOutput());
