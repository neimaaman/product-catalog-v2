// in js get the HTML element that we want to watch for an event on...

const productForm = document.querySelector('product-form');//document object refers to the whole page of the website we r working on 
console.log(productForm);

// to get specific element form html to js
// const nameInputEl = document.querySelector('#product-name');
// console.log(nameInputEl);

//2. in js add some EventListners that watches for form submit
// i want to watch for two thing 1 when the user submit the form 2 after the submit
// 2a. data type....string
productForm.addEventListener('submit', );
// 3b. JS, >> function <<
let productCatalog = [];

const preview = function( event ) {
    event.preventDefault(); // stop the default action!
    console.log(event);


// in js when a form submit happens, get all the values form the input and add to an array
const nameEl = document.querySelector('#product-name');
const priceEl = document.querySelector('#product-price');
const checkedEl = document.querySelector('#product-isprime');


const newProduct = {
    prodctName: nameEl.value,
    productPrice: Number(priceEl.value),
    isPrime: checkedEl.checked,
};


productCatalog.push(newProduct);
console.log(productCatalog);

for (let product of productCatalog) {
    console.log(
        `
        product Name: ${product['productName']}
        product price: $${product['productPrice']}
        `
    );

    if(product['isPrime']) {
        console.log('something');
    }
}
};
productForm.addEventListener( 'submit', preview);