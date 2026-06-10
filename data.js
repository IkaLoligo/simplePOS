let items = [
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


let sales = [

]




function declaredCheckItemPrices() {
    if (localStorage.getItem("items") === null) {
        let itemsJSON = JSON.stringify(items);
        localStorage.setItem('items', itemsJSON); 
        console.log('items are initialised! :)')
    }

    else {
        console.log('Data was already initialised :)')
    }
}

function declaredCheckSales() {
    if (localStorage.getItem("sales") === null) {
        let salesJSON = JSON.stringify(sales);
        localStorage.setItem('sales', salesJSON)
        console.log('Sales are initialised $v$')
    }

    else {
        console.log('Sales are already saved $v$')
    }
}

declaredCheckItemPrices();
declaredCheckSales();