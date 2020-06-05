const email = "ayobamialadenoye@gmail.com";
const name = "Ayobami Aladenoye";
const id = "HNG-04665";
const language = "JavaScript";

const myInfo = {
    name,
    id,
    language,
    email,
};

const printMyInfo = ({name, id, language, email}) => {
    return `Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${language} for stage 2 task.`;
};

console.log(printMyInfo(myInfo));
