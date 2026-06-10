// Variable text order control
let selected = document.getElementById("selected")
let todayTotalNumber = document.getElementById("todayTotalNumber")
let totalCurrentCustomer = document.getElementById("totalCurrentCustomer")

// Variable text orderListBox
let listCurrentOrders = document.getElementById("listCurrentOrder")

// Variable text Today's total list box
let arrayTotalProduct = document.getElementById("arrayTotalProducts")


//contentBoxes (divs in main)
let productButtonBox = document.getElementById("productButtonBox")
let orderListBox = document.getElementById("orderListBox")
let orderControlBox = document.getElementById("orderControlBox")
let totalSalesPeriodBox = document.getElementById("totalSalesPeriodBox")

//contentBoxes status (divs in main)
    totalSalesPeriodBox.style.display = "none";

// variables numbers for var text --Rework needed, see if stuff is redundant!

// || v Needed know which item button has been pressed, number correspondts to itemPrice array index v ||
let selectedNumber = 0; 
// Vague, name change needed. Is used to showcase current total for current customer.
let price = 0;
// Clear, used to showcase sales period total revenue
let salesPeriodTotalRevenue = 0;

//localStorage retrieval null
    let itempricesJsonObjTest = null;

//buttons Products Might be good to turn into objects and be put in an array for scaleability
/* use querySelector instead of getelementById for more clarity -Maikel */
/* query selector all */
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

//orderControlBox buttons 
const addOne = document.getElementById("addOne")
const removeOne = document.getElementById("removeOne")
const addFive = document.getElementById("addFive")
const addTen = document.getElementById("addTen");
const clearSelectedItem = document.getElementById("clearSelectedItem")
const clearBasket = document.getElementById("clearBasket")
const payByCash = document.getElementById("payByCash");
const payByCard = document.getElementById("payByCard")
const viewTotalToday = document.getElementById("viewTotalToday")
const viewTotalConvention = document.getElementById("viewTotalConvention")
const endDay = document.getElementById("endDay")


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


removeOne.addEventListener('click',() => {
    if (price > 0 && itemPrices[selectedNumber].currentCustomerCount > 0 ) {
        price -= itemPrices[selectedNumber].price;
        totalCurrentCustomer.innerHTML = '€' + price + ',-';
    }
    else {
        totalCurrentCustomer.innerHTML = '€' + price + ',-';
    }

    

    //Go through itemPrices array, if itemprices.currentCustomerCount > 0,
    //then append li with itemprices[x].name + " " + itemprices[x].currentCustomerCount
    //else next loop iteration
    //
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };
    let addCountToCurrentCustomer = itemPrices[selectedNumber].currentCustomerCount;
    if (addCountToCurrentCustomer > 0) {
        itemPrices[selectedNumber].currentCustomerCount -=1; 
    }
    else {
        itemPrices[selectedNumber].currentCustomerCount = 0;
    }
    console.log(itemPrices);
    for (let arrayCount = 0; arrayCount < itemPrices.length; arrayCount ++) {
        if (itemPrices[arrayCount].currentCustomerCount > 0) {
            let liCreater = document.createElement("li");
            liCreater.classList.add('liCurrentCustomerItem');
            liCreater.innerText = itemPrices[arrayCount].name + " count = " + itemPrices[arrayCount].currentCustomerCount;
            listCurrentOrders.appendChild(liCreater);
        }

    }
})


addFive.addEventListener('click',() =>{
    price += itemPrices[selectedNumber].price * 5;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    

    //Go through itemPrices array, if itemprices.currentCustomerCount > 0,
    //then append li with itemprices[x].name + " " + itemprices[x].currentCustomerCount
    //else next loop iteration
    //
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };

    let addCountToCurrentCustomer = itemPrices[selectedNumber].currentCustomerCount +=5;
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

addTen.addEventListener('click',() =>{
    price += itemPrices[selectedNumber].price * 10;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    

    //Go through itemPrices array, if itemprices.currentCustomerCount > 0,
    //then append li with itemprices[x].name + " " + itemprices[x].currentCustomerCount
    //else next loop iteration
    //


    let addCountToCurrentCustomer = itemPrices[selectedNumber].currentCustomerCount +=10;
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

clearSelectedItem.addEventListener('click', () => {
    
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };

    price -= itemPrices[selectedNumber].currentCustomerCount * itemPrices[selectedNumber].price;
    itemPrices[selectedNumber].currentCustomerCount = 0;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    
    for (let arrayCount = 0; arrayCount < itemPrices.length; arrayCount ++) {
        if (itemPrices[arrayCount].currentCustomerCount > 0) {
            let liCreater = document.createElement("li");
            liCreater.classList.add('liCurrentCustomerItem');
            liCreater.innerText = itemPrices[arrayCount].name + " count = " + itemPrices[arrayCount].currentCustomerCount;
            listCurrentOrders.appendChild(liCreater);
        }

    }    
})

clearBasket.addEventListener('click', () => {
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };

    price = 0;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';

    for (let arrayCount = 0; arrayCount < itemPrices.length; arrayCount ++) {
        if (itemPrices[arrayCount].currentCustomerCount > 0) {
            itemPrices[arrayCount].currentCustomerCount = 0};
            console.log(itemPrices[arrayCount].currentCustomerCount);
    } 
})

nextCustomer.addEventListener('click', () => {
    salesPeriodTotalRevenue = 0;
    price = 0;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
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

 todayTotalList.addEventListener('click', () => {
    //Generate pop up screen which shows all sold items + revenue + option to download data to export to spreadsheet + reset salesperiod'
    productButtonBox.style.display = "none";
    orderListBox.style.display = "none";
    orderControlBox.hidden = true;
    totalSalesPeriodBox.style.display = "flex";
    closeTotalSalesPeriodBox.hidden = false;
    arrayTotalProduct.hidden = false;
    for (arrayCount = 0; arrayCount < itemPrices.length; arrayCount ++){
        if (itemPrices[arrayCount].totalBoughtPeriodCount > 0) {
        let liCreater = document.createElement("li");
        liCreater.classList.add('liLocalStoredItemPriceArrayRestoredLi');
        liCreater.innerText = "Name: " + itemPrices[arrayCount].name + " Total sold: " + itemPrices[arrayCount].totalBoughtPeriodCount + " Item Revenue: " + itemPrices[arrayCount].totalBoughtPeriodRevenue;
        arrayTotalProducts.appendChild(liCreater);
        }
 
    }
 }
)


closeTotalSalesPeriodBox.addEventListener('click', () => {
    productButtonBox.style.display = "grid";
    orderListBox.style.display = "flex";
    orderControlBox.hidden = false;
    totalSalesPeriodBox.hidden = true;
    closeTotalSalesPeriodBox.hidden = true;
    arrayTotalProduct.hidden = true;
})
 