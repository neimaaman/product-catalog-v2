class Catalog  {
    constructor(){
      this.productStore = [];
      
    }
  
    addProduct(product){
        this.productStore.push(product)
              
   
      }
  
  getProduct() {
    return this.productStore
  }
    
    
  }
  