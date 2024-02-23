class Person {
    constructor(fName, lName, age, email) {
  
      this.fName = fName;
      this.lName = lName;
      this.age = age;
      this.email = email;
      this.address = address
  
    }
    
  
  
    fullInfo() { 
      return{
        fullName: this.fName +this.lName,
        age: this.age,
        email: this.email,
        address: this.address
  
    
      }
//   or i can do it this way too

// return `${this.lastName}, ${this.firstName}, (${this.email}, ({$this.address})`;

    }
   
  }
  