// Variable text 
let selected = document.getElementById("selected")
let todayTotalNumber = document.getElementById("todayTotalNumber")
let totalCurrentCustomer = document.getElementById("totalCurrentCustomer")
let listCurrentOrders = document.getElementById("listCurrentOrder")

// variables numbers for var text
let totalCurrentCustomerTotal = 0;
let selectedNumber = 0;
let price = 0;
let salesPeriodTotalRevenue = 0;

//localStorage retrieval
    let itempricesJsonObjTest = null;

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
const removeOne = document.getElementById("removeOne")
const todayTotalList = document.getElementById("todayTotalList")
const nextCustomer = document.getElementById("nextCustomer")

let itemPrices = [
    {
        name:"sticker",
        price: 2,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"sticker Merlijn",
        price: 2,
        currentCustomerCount: 0,    
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,    
    },
    {
        name:"keychain",
        price: 8,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
        {
        name:"Eevee Roll",
        price: 3,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Phone Charm",
        price: 5,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Mystery Bag",
        price: 8,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"pkm bag",
        price: 20,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"hand fans",
        price: 5,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Pipi",
        price: 18,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Stickerbook",
        price: 15,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
]


//select product logic
product1.addEventListener('click', () => {
    selected.innerText = product1.innerText;
    console.log("button 1 pressed!");
    selectedNumber = 0;


})

product2.addEventListener('click', () => {
    selected.innerText = product2.innerText;
    console.log("button 2 pressed!");
    selectedNumber = 1;    

})

product3.addEventListener('click', () => {
    selected.innerText = product3.innerText;
    console.log("button 3 pressed!");
    selectedNumber = 2;
})

product4.addEventListener('click', () => {
    selected.innerText = product4.innerText;
    console.log("button 4 pressed!");
    selectedNumber = 3;
})

product5.addEventListener('click', () => {
    selected.innerText = product5.innerText;
    console.log("button 5 pressed!");
    selectedNumber = 4;    
})

product6.addEventListener('click', () => {
    selected.innerText = product6.innerText;
    console.log("button 6 pressed!");
    selectedNumber = 5;    
})

product7.addEventListener('click', () => {
    selected.innerText = product7.innerText;
    console.log("button 7 pressed!");
    selectedNumber = 6;
})

product8.addEventListener('click', () => {
    selected.innerText = product8.innerText;
    console.log("button 8 pressed!");
    selectedNumber = 7;
})

product9.addEventListener('click', () => {
    selected.innerText = product9.innerText;
    console.log("button 9 pressed!");
    selectedNumber = 8;
})

product10.addEventListener('click', () => {
    selected.innerText = product10.innerText;
    console.log("button 10 pressed!");
    selectedNumber = 9;
})


console.log("hallo",product1)

//Add one logic
addOne.addEventListener('click', () => {
    price += itemPrices[selectedNumber].price;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    

    //Go through itemPrices array, if itemprices.currentCustomerCount > 0,
    //then append li with itemprices[x].name + " " + itemprices[x].currentCustomerCount
    //else next loop iteration
    //
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };

    let addCountToCurrentCustomer = itemPrices[selectedNumber].currentCustomerCount +=1;
    console.log(itemPrices);
    for (let arrayCount = 0; arrayCount < itemPrices.length; arrayCount ++) {
        if (itemPrices[arrayCount].currentCustomerCount > 0) {
            let liCreater = document.createElement("li");
            liCreater.classList.add('liCurrentCustomerItem');
            liCreater.innerText = itemPrices[arrayCount].name + " count = " + itemPrices[arrayCount].currentCustomerCount;
            listCurrentOrders.appendChild(liCreater);
        }

    }
    console.log(itemPrices);
    


    console.log(itemPrices[selectedNumber].currentCustomerCount);
    
})

 nextCustomer.addEventListener('click', () => {
    salesPeriodTotalRevenue = 0;
    //main funct 1 Add products to a list to be processed into an xml file -> how to? indexedDB!? later
    //main funct 2 Delete the current customers data from the current order -> can be done now
    //If item has been bought by current customer, add it to total of current sales period and revenue current sales period
    for (let arrayCount = 0; arrayCount < itemPrices.length; arrayCount ++) {
        if (itemPrices[arrayCount].currentCustomerCount > 0) {
            itemPrices[arrayCount].totalBoughtPeriodCount += itemPrices[arrayCount].currentCustomerCount;
            itemPrices[arrayCount].totalBoughtPeriodRevenue += itemPrices[arrayCount].price * itemPrices[arrayCount].currentCustomerCount;
            console.log("salesPeriodTotalRevenue: " + salesPeriodTotalRevenue);
            console.log("salesPeriodTotalRevenue: " + salesPeriodTotalRevenue);            
            console.log(itemPrices[arrayCount]);
            itemPrices[arrayCount].currentCustomerCount = 0;
            listCurrentOrders.removeChild(listCurrentOrders.firstChild);
        }
    }
    for (let arrayCount = 0; arrayCount < itemPrices.length; arrayCount ++) {
        salesPeriodTotalRevenue += itemPrices[arrayCount].totalBoughtPeriodRevenue;
    }
    todayTotalNumber.innerHTML = 'total today : €' + salesPeriodTotalRevenue + ',-';    

    let itempricesJsonObj = JSON.stringify(itemPrices);
    localStorage.setItem("itemPricesArray", itempricesJsonObj);
    itempricesJsonObjTest = localStorage.getItem("itemPricesArray");
    console.log(itemPrices);

 })

 todayTotalList('click', () => {
    //Generate pop up screen which shows all sold items + revenue + option to download data to export to spreadsheet + reset salesperiod'

 })
 