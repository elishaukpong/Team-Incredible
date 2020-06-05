class MyDetail{
    constructor(firstName, lastName, id, email, lang){  
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email; 
        this.language = lang;
    }

        mySummary(){
            return `Hello World, this is ${this.lastName} ${this.firstName} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task.`;
        }
}

const user = new MyDetail('Uchenna', 'Uzor', 'HNG-06337', 'ucheuzor24@gmail.com', 'JavaScript');

console.log(user.mySummary());

