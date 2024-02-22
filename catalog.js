class Catalog extends product {
    constructor() {
      // Call the constructor of the parent class (product)
      super();
      this.catalogList = []; // initialize catalogList as an empty array
    }
  
    addProductToCatalog() {
      // Use the addProduct method from the parent class (product)
      const productDetails = super.addProduct();
  
      // Add the product details to the catalogList
      this.catalogList.push({
        productName: productDetails[0].productName,
        productPrice: productDetails[0].productPrice,
        productCurrency: productDetails[0].productCurrency,
        productAmount: productDetails[0].productAmount,
      });
  
      return this.catalogList;
    }
  
    getAllProductsInCatalog() {
      return this.catalogList;
    }
  }
  
  // Create an instance of the Catalog class
  const catalogOne = new Catalog();
  
  // Add product details to the catalog
  catalogOne.addProductToCatalog();
  console.log(catalogOne.getAllProductsInCatalog());
  
  // Create another instance of the Catalog class
  const catalogTwo = new Catalog();
  
  // Add product details to the second catalog
  catalogTwo.addProductToCatalog();
  console.log(catalogTwo.getAllProductsInCatalog());
  