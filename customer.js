class Customer {
    constructor(fName,lName,email) {
      this.fName = fName,
      this.lName = lName,
      this.email = email
      this.customerStore = []
    }
  
  addCustomer() {
    this.customerStore.push(
      {
        fName: this.fName,
        lName: this.lName,
        email: this.email 
      }
     )
  
  }
  
  
  showAllCustomers() {
  
  return this.addCustomer()
  
  }
  
  }