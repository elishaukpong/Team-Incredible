const hngIntern = {  
	printInternIntroduction : function(){ 
		console.log(`Hello World, this is ${this.fullName} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task.`); 
	} 
}; 
const intern = Object.create(hngIntern); 
intern.fullName = 'Abdullahi Idris'; 
intern.id = 'HNG-03730'; 
intern.language = 'CSharp';
intern.email = 'myrahama@gmail.com';
intern.printInternIntroduction(); 
