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

//constructor for sale object
function sale (id, type, ammount) {
    this.id = id;
    this.type = type;
    this.ammount = ammount;
}

let salesStored = JSON.parse(localStorage.getItem('sales'));
let itemsStored = JSON.parse(localStorage.getItem('items'));
let buttonsStored = JSON.parse(localStorage.getItem('buttons'));
let buttonIdHistory = JSON.parse(localStorage.getItem('lastBtnId'));

function buttonsInit () {
    while (productButtonBox.firstChild) {
        productButtonBox.removeChild(productButtonBox.firstChild);
    };
    let findMainCategories = buttonsStored.filter((category) => category.category === 'mainCategory')
    for (let arrayCount = 0; arrayCount < findMainCategories.length; arrayCount ++) {
        let buttonCreator = document.createElement("button");
        buttonCreator.setAttribute("id", findMainCategories[arrayCount].buttonID);
        buttonCreator.classList.add('itemButton')
        buttonCreator.innerText = findMainCategories[arrayCount].name;
        productButtonBox.appendChild(buttonCreator);
    }
}
buttonsInit();

productButtonBox.addEventListener('click', () => {
        let buttonID = event.target.id
        let getButton = buttonsStored.find((button) => button.buttonID === buttonID);
        console.log(getButton)
        let buttonSubCat = getButton.subcategory;
        let buttonSubCatsArray = buttonsStored.filter((gatherChilderen) => gatherChilderen.category === buttonSubCat);
    if (event.target.classList.contains('itemButton') && getButton.canBeSold == false){
        //handles menu navigation
        buttonIdHistory.push(buttonID)
        localStorage.setItem('lastBtnId', JSON.stringify(buttonIdHistory));
        
        while (productButtonBox.firstChild) {
            productButtonBox.removeChild(productButtonBox.firstChild);
        };
        let createBackBtn = document.createElement("button");
        createBackBtn.classList.add('backButton')
        createBackBtn.setAttribute("id", buttonID);
        createBackBtn.innerText = "Back"
        productButtonBox.appendChild(createBackBtn);
        for (arrayCount = 0; arrayCount < buttonSubCatsArray.length; arrayCount ++) {
            let buttonCreator = document.createElement("button");
            buttonCreator.setAttribute("id", buttonSubCatsArray[arrayCount].buttonID);
            buttonCreator.classList.add('itemButton');
            buttonCreator.innerText = buttonSubCatsArray[arrayCount].name;
            productButtonBox.appendChild(buttonCreator);
        }
    }
    else if ((event.target.classList.contains('itemButton') && getButton.canBeSold == true)){
        console.log('Yay')
    }
})

productButtonBox.addEventListener('click', () => {
    if (event.target.classList.contains('backButton')){
        buttonIdHistory = JSON.parse(localStorage.getItem('lastBtnId'))
        buttonIdHistory.pop();
        localStorage.setItem('lastBtnId', buttonIdHistory);
        let buttonID = buttonIdHistory[buttonIdHistory.length - 1];
        console.log(buttonID);
        let getButton = buttonsStored.find((button) => button.buttonID === buttonID);
        let buttonCat = getButton.category;
        let buttonCatsArray = buttonsStored.filter((gatherParents) => gatherParents.category === buttonCat);


        console.log(buttonID)
        console.log(getButton)
        console.log(buttonCat)
        console.log(buttonCatsArray)
        while (productButtonBox.firstChild) {
            productButtonBox.removeChild(productButtonBox.firstChild);
        };

        let createBackBtn = document.createElement("button");
        createBackBtn.classList.add('backButton')
        createBackBtn.setAttribute("id", buttonID);
        createBackBtn.innerText = "Back"
        productButtonBox.appendChild(createBackBtn);
        
        for (arrayCount = 0; arrayCount < buttonCatsArray.length; arrayCount ++) {
            let buttonCreator = document.createElement("button");
            buttonCreator.setAttribute("id", buttonCatsArray[arrayCount].buttonID);
            buttonCreator.classList.add('itemButton');
            buttonCreator.innerText = buttonCatsArray[arrayCount].name;
            productButtonBox.appendChild(buttonCreator);
        }
    }
})

//select product logic
/*
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
*/




//Add one logic
addOne.addEventListener('click', () => {
    price += itemsStored[selectedNumber].price;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    

    //Go through itemsStored array, if itemsStored.currentCustomerCount > 0,
    //then append li with itemsStored[x].name + " " + itemsStored[x].currentCustomerCount
    //else next loop iteration
    //
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };

    let addCountToCurrentCustomer = itemsStored[selectedNumber].currentCustomerCount +=1;
    console.log(itemsStored);
    for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
        if (itemsStored[arrayCount].currentCustomerCount > 0) {
            let liCreater = document.createElement("li");
            liCreater.classList.add('liCurrentCustomerItem');
            liCreater.innerText = itemsStored[arrayCount].name + " count = " + itemsStored[arrayCount].currentCustomerCount;
            listCurrentOrders.appendChild(liCreater);
        }

    }
    console.log(itemsStored);
    


    console.log(itemsStored[selectedNumber].currentCustomerCount);
    
})



removeOne.addEventListener('click',() => {
    if (price > 0 && itemsStored[selectedNumber].currentCustomerCount > 0 ) {
        price -= itemsStored[selectedNumber].price;
        totalCurrentCustomer.innerHTML = '€' + price + ',-';
    }
    else {
        totalCurrentCustomer.innerHTML = '€' + price + ',-';
    }

    

    //Go through itemsStored array, if itemsStored.currentCustomerCount > 0,
    //then append li with itemsStored[x].name + " " + itemsStored[x].currentCustomerCount
    //else next loop iteration
    //
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };
    let addCountToCurrentCustomer = itemsStored[selectedNumber].currentCustomerCount;
    if (addCountToCurrentCustomer > 0) {
        itemsStored[selectedNumber].currentCustomerCount -=1; 
    }
    else {
        itemsStored[selectedNumber].currentCustomerCount = 0;
    }
    console.log(itemsStored);
    for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
        if (itemsStored[arrayCount].currentCustomerCount > 0) {
            let liCreater = document.createElement("li");
            liCreater.classList.add('liCurrentCustomerItem');
            liCreater.innerText = itemsStored[arrayCount].name + " count = " + itemsStored[arrayCount].currentCustomerCount;
            listCurrentOrders.appendChild(liCreater);
        }

    }
})


addFive.addEventListener('click',() =>{
    price += itemsStored[selectedNumber].price * 5;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    

    //Go through itemsStored array, if itemsStored.currentCustomerCount > 0,
    //then append li with itemsStored[x].name + " " + itemsStored[x].currentCustomerCount
    //else next loop iteration
    //
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };

    let addCountToCurrentCustomer = itemsStored[selectedNumber].currentCustomerCount +=5;
    console.log(itemsStored);
    for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
        if (itemsStored[arrayCount].currentCustomerCount > 0) {
            let liCreater = document.createElement("li");
            liCreater.classList.add('liCurrentCustomerItem');
            liCreater.innerText = itemsStored[arrayCount].name + " count = " + itemsStored[arrayCount].currentCustomerCount;
            listCurrentOrders.appendChild(liCreater);
        }

    }
    console.log(itemsStored);
    


    console.log(itemsStored[selectedNumber].currentCustomerCount);
    
})

addTen.addEventListener('click',() =>{
    price += itemsStored[selectedNumber].price * 10;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    

    //Go through itemsStored array, if itemsStored.currentCustomerCount > 0,
    //then append li with itemsStored[x].name + " " + itemsStored[x].currentCustomerCount
    //else next loop iteration
    //


    let addCountToCurrentCustomer = itemsStored[selectedNumber].currentCustomerCount +=10;
    console.log(itemsStored);
    for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
        if (itemsStored[arrayCount].currentCustomerCount > 0) {
            let liCreater = document.createElement("li");
            liCreater.classList.add('liCurrentCustomerItem');
            liCreater.innerText = itemsStored[arrayCount].name + " count = " + itemsStored[arrayCount].currentCustomerCount;
            listCurrentOrders.appendChild(liCreater);
        }

    }
    console.log(itemsStored);
    


    console.log(itemsStored[selectedNumber].currentCustomerCount);

    
})

clearSelectedItem.addEventListener('click', () => {
    
    while (listCurrentOrders.firstChild) {
        listCurrentOrders.removeChild(listCurrentOrders.firstChild);
    };

    price -= itemsStored[selectedNumber].currentCustomerCount * itemsStored[selectedNumber].price;
    itemsStored[selectedNumber].currentCustomerCount = 0;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    
    for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
        if (itemsStored[arrayCount].currentCustomerCount > 0) {
            let liCreater = document.createElement("li");
            liCreater.classList.add('liCurrentCustomerItem');
            liCreater.innerText = itemsStored[arrayCount].name + " count = " + itemsStored[arrayCount].currentCustomerCount;
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

    for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
        if (itemsStored[arrayCount].currentCustomerCount > 0) {
            itemsStored[arrayCount].currentCustomerCount = 0};
            console.log(itemsStored[arrayCount].currentCustomerCount);
    } 
})

//need data base for this!

//funct for pay by cash

payByCash.addEventListener('click', () => {
    let newId = 0;
    let newType = 'null';
    let newAmmount = 0;
    let newSale = null;
    let salesSavedLocally = 0;

    if (salesStored[0] === undefined) {
        newId = 1;
        newType = 'cash';
        newAmmount = price;
        newSale = new sale(newId, newType, newAmmount);
        salesStored.push(newSale);
        salesSavedLocally = JSON.stringify(salesStored);
        localStorage.setItem('sales', salesSavedLocally)
        
        while (listCurrentOrders.firstChild) {
            listCurrentOrders.removeChild(listCurrentOrders.firstChild);
        };

        price = 0;
        totalCurrentCustomer.innerHTML = '€' + price + ',-';

        for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
            if (itemsStored[arrayCount].currentCustomerCount > 0) {
                itemsStored[arrayCount].currentCustomerCount = 0};
                console.log(itemsStored[arrayCount].currentCustomerCount);
        } 
        
    }
    else {
        newId = salesStored.length + 1;
        newType = 'cash';
        newAmmount = price;
        newSale = new sale(newId, newType, newAmmount);
        salesStored.push(newSale);
        console.log(salesStored)
        salesSavedLocally = JSON.stringify(salesStored);
        localStorage.setItem('sales', salesSavedLocally)
        while (listCurrentOrders.firstChild) {
            listCurrentOrders.removeChild(listCurrentOrders.firstChild);
        };

        price = 0;
        totalCurrentCustomer.innerHTML = '€' + price + ',-';

        for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
            if (itemsStored[arrayCount].currentCustomerCount > 0) {
                itemsStored[arrayCount].currentCustomerCount = 0};
                console.log(itemsStored[arrayCount].currentCustomerCount);
        } 
    }

})

//funct for pay by card
payByCard.addEventListener('click', () => {
    let newId = 0;
    let newType = 'null';
    let newAmmount = 0;
    let newSale = null;
    let salesSavedLocally = 0;

    if (salesStored[0] === undefined) {
        newId = 1;
        newType = 'card';
        newAmmount = price;
        newSale = new sale(newId, newType, newAmmount);
        salesStored.push(newSale);
        salesSavedLocally = JSON.stringify(salesStored);
        localStorage.setItem('sales', salesSavedLocally)
        
        while (listCurrentOrders.firstChild) {
            listCurrentOrders.removeChild(listCurrentOrders.firstChild);
        };

        price = 0;
        totalCurrentCustomer.innerHTML = '€' + price + ',-';

        for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
            if (itemsStored[arrayCount].currentCustomerCount > 0) {
                itemsStored[arrayCount].currentCustomerCount = 0};
                console.log(itemsStored[arrayCount].currentCustomerCount);
        } 
        
    }
    else {
        newId = salesStored.length + 1;
        newType = 'card';
        newAmmount = price;
        newSale = new sale(newId, newType, newAmmount);
        salesStored.push(newSale);
        console.log(salesStored)
        salesSavedLocally = JSON.stringify(salesStored);
        localStorage.setItem('sales', salesSavedLocally)
        while (listCurrentOrders.firstChild) {
            listCurrentOrders.removeChild(listCurrentOrders.firstChild);
        };

        price = 0;
        totalCurrentCustomer.innerHTML = '€' + price + ',-';

        for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
            if (itemsStored[arrayCount].currentCustomerCount > 0) {
                itemsStored[arrayCount].currentCustomerCount = 0};
                console.log(itemsStored[arrayCount].currentCustomerCount);
        } 
    }

})
//view total today
viewTotalToday.addEventListener('click', () => {
    let totalToday = 0;
    for (let arrayCount = 0; arrayCount < salesStored.length; arrayCount++) {
        totalToday += salesStored[arrayCount].ammount;
        console.log(salesStored[arrayCount].ammount)
        console.log(salesStored[arrayCount]);
        console.log(arrayCount)
        
    }
    console.log(totalToday);

})

//view total convention
nextCustomer.addEventListener('click', () => {
    salesPeriodTotalRevenue = 0;
    price = 0;
    totalCurrentCustomer.innerHTML = '€' + price + ',-';
    //main funct 1 Add products to a list to be processed into an xml file -> how to? indexedDB!? later
    //main funct 2 Delete the current customers data from the current order -> can be done now
    //If item has been bought by current customer, add it to total of current sales period and revenue current sales period
    for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
        if (itemsStored[arrayCount].currentCustomerCount > 0) {
            itemsStored[arrayCount].totalBoughtPeriodCount += itemsStored[arrayCount].currentCustomerCount;
            itemsStored[arrayCount].totalBoughtPeriodRevenue += itemsStored[arrayCount].price * itemsStored[arrayCount].currentCustomerCount;
            console.log("salesPeriodTotalRevenue: " + salesPeriodTotalRevenue);
            console.log("salesPeriodTotalRevenue: " + salesPeriodTotalRevenue);            
            console.log(itemsStored[arrayCount]);
            itemsStored[arrayCount].currentCustomerCount = 0;
            listCurrentOrders.removeChild(listCurrentOrders.firstChild);
        }
    }
    for (let arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++) {
        salesPeriodTotalRevenue += itemsStored[arrayCount].totalBoughtPeriodRevenue;
    }
    todayTotalNumber.innerHTML = 'total today : €' + salesPeriodTotalRevenue + ',-';    

    let itempricesJsonObj = JSON.stringify(itemsStored);
    localStorage.setItem("itemPricesArray", itempricesJsonObj);
    itempricesJsonObjTest = localStorage.getItem("itemPricesArray");
    console.log(itemsStored);

 })

 todayTotalList.addEventListener('click', () => {
    //Generate pop up screen which shows all sold items + revenue + option to download data to export to spreadsheet + reset salesperiod'
    productButtonBox.style.display = "none";
    orderListBox.style.display = "none";
    orderControlBox.hidden = true;
    totalSalesPeriodBox.style.display = "flex";
    closeTotalSalesPeriodBox.hidden = false;
    arrayTotalProduct.hidden = false;
    for (arrayCount = 0; arrayCount < itemsStored.length; arrayCount ++){
        if (itemsStored[arrayCount].totalBoughtPeriodCount > 0) {
        let liCreater = document.createElement("li");
        liCreater.classList.add('liLocalStoredItemPriceArrayRestoredLi');
        liCreater.innerText = "Name: " + itemsStored[arrayCount].name + " Total sold: " + itemsStored[arrayCount].totalBoughtPeriodCount + " Item Revenue: " + itemsStored[arrayCount].totalBoughtPeriodRevenue;
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
 