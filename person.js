class person{
    constructor(fName,lName,age,email){
  
      this.fName = fName;
      this.lName = lName;
      this.age = age;
      this.email = email;
      this.address = []
  
    }
  getFullName(){
  
    return this.fName + this.lName;
  }
  
  getEmail(){
  
    return this.email
  }
    
  fullInfo(){
    this.address.push(
      this.getFullName(),
      this.getEmail(),
      this.age
  
    )
    // console.log(this.address)
  
    }
  
  }
  
  const personOne = new person('sam','romm', '23', 'samromm@gmail.com');
  personOne.fullInfo();
  console.log(personOne)
  
  const personTwo = new person('selem', 'crane', '23', 'selemcrane@gmail.com');
  personTwo.fullInfo();
  console.log(personTwo)
  // const fullName = personTwo.getFullName();
  // console.log(fullName)
  