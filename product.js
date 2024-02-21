class product {
    constructor(productName, productPrice, productCurrency, productAmount) {
      this.productName = productName;
      this.productPrice = productPrice;
      this.productCurrency = productCurrency;
      this.productAmount = productAmount;
      this.productList = [] //initialize productList as an empty array
    }
  
  
  
    getAllProduct() {
      this.productList.push(
        {
         
          productName: this.productName,
          productPrice: this.productPrice,
          productCurrency:this. productCurrency,
          productAmount: this.productAmount,
        }
  
      );
      
  
      return this.productList ;
  
    }
  
  
    addProduct() {
      return this.productList;
    }
  
  
  }
  
  // create an instance of the product class
  const productOne = new product('sandales', '110', 'USD', '23');
  
  // call getAllProduct to add productdetails to the productList
  productOne.getAllProduct()
  console.log(productOne)
  console.log(productOne.productList)
  
  const productTwo = new product('headphone', '111', 'EUR', '234')
  productTwo.getAllProduct()
  console.log(productTwo.productList)










