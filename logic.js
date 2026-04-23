// Variable text 
let selected = document.getElementById("selected")
let count = document.getElementById("count")
let todayTotalNumber = document.getElementById("todayTotalNumber")
let totalCurrentCustomer = document.getElementById("totalCurrentCustomer")

// variables numbers for var text
let countNumber = 0;
let totalCurrentCustomerTotal = 0;
let selectedNumber = 0;
let price = 0;

//buttons Products
/* use querySelector instead of getelementById for more clarity -Maikel */
const product1 = document.querySelector(".itemButton:nth-child(1)")
const product2 = document.querySelector(".itemButton:nth-child(2)")
const product3 = document.querySelector(".itemButton:nth-child(3)")
const product4 = document.querySelector(".itemButton:nth-child(4)")
const product5 = document.querySelector(".itemButton:nth-child(5)")
const product6 = document.querySelector(".itemButton:nth-child(6)")
const product7 = document.querySelector(".itemButton:nth-child(7)")
const product8 = document.querySelector(".itemButton:nth-child(8)")
const product9 = document.querySelector(".itemButton:nth-child(9)")
const product10 = document.querySelector(".itemButton:nth-child(10)")

//buttons manipulators
const addOne = document.getElementById("addOne")
const administerProduct = document.getElementById("administerProduct")
const selectLastProduct = document.getElementById("selectLastProduct")
const selectedProductDelete = document.getElementById("selectedProductDelete")
const todayTotalList = document.getElementById("todayTotalList")
const nextCustomer = document.getElementById("nextCustomer")

let itemPrices = [
    2,
    2,
    8,
    3,
    5,
    8,
    20,
    5,
    18,
    15
]


//select product logic
product1.addEventListener('click', () => {
    selected.innerText = product1.innerText;
    console.log("button 1 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 0;


})

product2.addEventListener('click', () => {
    selected.innerText = product2.innerText;
    console.log("button 2 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 1;    

})

product3.addEventListener('click', () => {
    selected.innerText = product3.innerText;
    console.log("button 3 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 2;
})

product4.addEventListener('click', () => {
    selected.innerText = product4.innerText;
    console.log("button 4 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 3;
})

product5.addEventListener('click', () => {
    selected.innerText = product5.innerText;
    console.log("button 5 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 4;    
})

product6.addEventListener('click', () => {
    selected.innerText = product6.innerText;
    console.log("button 6 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 5;    
})

product7.addEventListener('click', () => {
    selected.innerText = product7.innerText;
    console.log("button 7 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 6;
})

product8.addEventListener('click', () => {
    selected.innerText = product8.innerText;
    console.log("button 8 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 7;
})

product9.addEventListener('click', () => {
    selected.innerText = product9.innerText;
    console.log("button 9 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 8;
})

product10.addEventListener('click', () => {
    selected.innerText = product10.innerText;
    console.log("button 10 pressed!");
    countNumber = 0;
    count.innerHTML = countNumber;
    selectedNumber = 9;
})


console.log("hallo",product1)

//manipulator logic
addOne.addEventListener('click', () => {
    countNumber +=1;
    count.innerHTML = countNumber;
    price += itemPrices[selectedNumber];
    totalCurrentCustomer.innerHTML = price;

})

