class Product {
    constructor(productName, productPrice, productCurrency, productAmount) {
      this.productName = productName;
      this.productPrice = productPrice;
      this.productCurrency = productCurrency;
      this.productAmount = productAmount;
      this.productList = [] //initialize productList as an empty array
    }
  
    productDetail() {
      this.productList.push({
        productName: this.productName,
        productPrice: this.productPrice, 
        productCurrency: this.productCurrency,
        productAmount: this.productAmount, 
      })
  
      
    }
  
    showProductDetail() {
  
     return this.productDetail();
    
  
    }
  
  
  
  
  }


  
  
  
  
  
  



