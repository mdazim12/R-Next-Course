 //catch dom elemets
const button = document.getElementById('button');
const price = document.getElementById('price');
const total = document.getElementById('total');



 //satate or data 

 const productPrice = 5000;

let totalPrice = 0;




//Set Product price default

price.innerText = `৳ ${productPrice}`
total.innerText = `Total: ৳ 0`



 button.addEventListener('click' , ()=> {
    totalPrice += productPrice;


    //update the total price
    total.innerText = `৳${totalPrice}`
 });
