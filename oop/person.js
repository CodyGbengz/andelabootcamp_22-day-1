class Person{
	constructor(firstName,surname,dateOfBirth,gender){
		this.firstName = firstName;
		this.surname = surname;
		this.dateOfBirth = dateOfBirth;
		this.gender =  gender;
		
	}

	get age(){
		return this.calcAge();
	}

	calcAge(){
		return new Date().getFullYear() - this.dateOfBirth;
	}

	get fullName(){
		return this.surname +' ' this.firstName; 
	}

	introduction(){
		return  'Hello, I am ' + this.fullName;
	}

}

class Teacher extends Person{
	constructor(subject){
		this.subject = subject;
		//super(firstName,surname,dateOfBirth,gender);
	}
	introduction(){
		if(this.gender === 'Male'){
			return 'Hi!, I am Mr' + this.fullName + ' a ' + this.subject + 'teacher';
		}
		else{
			return 'Hi!, I am Mrs' + this.fullName + ' a ' + this.subject + 'teacher';
		}
	}
}

