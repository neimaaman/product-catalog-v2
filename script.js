// in js get the HTML element that we want to watch for an event on...

const productForm = document.querySelector('#product-form');//document object refers to the whole page of the website we r working on 
console.log(productForm);

// to get specific element form html to js
// const nameInputEl = document.querySelector('#product-name');
// console.log(nameInputEl);

//2. in js add some EventListners that watches for form submit
// i want to watch for two thing 1 when the user submit the form 2 after the submit
// 2a. data type....string
// 3b. JS, >> function <<

let productCatalog = [];

const preview = function (event) {
    event.preventDefault(); // stop the default action!
    console.log(event);


    // in js when a form submit happens, get all the values form the input and add to an array
    const nameEl = document.querySelector('#product-name');
        console.log(nameEl)
    const priceEl = document.querySelector('#product-price');
        console.log(priceEl)
    const currencyEl = document.querySelector('#product-currency');
        console.log(currencyEl)
    const amountEl = document.querySelector('#product-amount');
        console.log(amountEl)
    const checkedEl = document.querySelector('#product-isprime');
        console.log(checkedEl)

        
    const newProduct = {
        productName: nameEl.value,
        productPrice: Number(priceEl.value),
        productCurrency: currencyEl.value,
        productAmount: amountEl.value,
        isPrime: checkedEl.checked,
    };


    productCatalog.push(newProduct);
    console.log(productCatalog);

    for (let product of productCatalog) {
        console.log(
            `
         product Name: ${product['productName']}
         product price: $${product['productPrice']}
         product currency: ${product['productCurrency']}
         product amount: ${product['productAmount']}
        `
        );
        if (product['isPrime']) {
            console.log('best buy')
        }

    }

    displayProducts()

};
productForm.addEventListener('submit', preview);
console.log(productForm)
function displayProducts() {
    const bodyElement = document.querySelector('#product-result')

for (let product of productCatalog) {

    
    const newText = document.createElement("div");
    newText.classList.add("h-screen", "flex", "justify-center", "items-center",  );
    newText.innerHTML = `
                        <div>
                            <p> product Name: ${product['productName']} </p>
                            <p> product price: $${product['productPrice']} </P>
                            <p> product currency: ${product['productCurrency']} </p>
                            <p> product amount: ${product['productAmount']} </p>
                        </div>
                        `
    bodyElement.appendChild(newText)
    
}
};