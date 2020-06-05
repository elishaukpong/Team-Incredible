const myInformation = {
    id: 'HNG-06410',
    fullName: 'Alabi Tosin Abiodun',
    language: 'Javascript',
    email: 'alabitosin58@gmail.com',
    fullDetails() {
        return `Hello World, this is ${this.fullName} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task.`
    }
}

console.log(myInformation.fullDetails())
