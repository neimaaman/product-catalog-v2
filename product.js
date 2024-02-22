class product {
    constructor(productName, productPrice, productCurrency, productAmount) {
      this.productName = productName;
      this.productPrice = productPrice;
      this.productCurrency = productCurrency;
      this.productAmount = productAmount;
      this.productList = [] //initialize productList as an empty array
    }
    
  
    showName() {
      this.productName;
  
  
      return this.productName;
  
    }
  
  showProductDetail() {
    this.productList.push(
      this.productName,
      this.productPrice,
      this.productAmount,
      this.productCurrency
    )
  
    return this.productList
  }
  }
  
  
  
  
  



