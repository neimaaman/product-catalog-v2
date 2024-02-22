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
  
  // // create an instance of the product class
  const productOne = new product('sandales', '110', 'USD', '23');
  
  // // call showName to add productdetails to the productList
  productOne.showName()
  productOne.showProductDetail()
  console.log(productOne)
  console.log(productOne.productList)
  
  const productTwo = new product('headphone', '111', 'EUR', '234')
  productTwo.showName()
  productTwo.showProductDetail()
  console.log(productTwo)
  console.log(productTwo.productList)
  
  
  



