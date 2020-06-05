class Message{
    static getMessage(name,id,email,lang){
        const message = `Hello World, this is ${name} with HNGi7 ID ${id} and email ${email} using ${lang} for stage 2 task.`;
        return message;
    }
}

const output = Message.getMessage("Sheu Ayomide Abdulazeez","HNG-00674","abdulazeezsheu1234@gmail.com","JavaScript");
console.log(output);