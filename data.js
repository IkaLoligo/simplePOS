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

let buttons = [
    {
        category: 'mainCategory',
        subcategory: 'printedGoods',
        name: 'Printed Goods',
        canBeSold: false,
        id: 0,
    },
        {
            category: 'printedGoods',
            subcategory: 'prints',
            name: 'Prints',
            canBeSold: false,
            id: 0,
        },
            {
                category: 'prints',
                subcategory: 'a5',
                name: 'Print a5',
                canBeSold: true,
                id: 1,
            },
            {
                category: 'prints',
                subcategory: 'a4',
                name: 'Print a4',
                canBeSold: true,
                id: 2,
            },
            {
                category: 'prints',
                subcategory: 'eeveeRoll',
                name: 'Eevee Roll',
                canBeSold: true,
                id: 3,
            },
        {
            category: 'printedGoods',
            subcategory: 'stickers',
            name: 'Stickers',
            canBeSold: false,
            id: 0,
        },
            {
                category: 'stickers',
                subcategory: 'hannahStickers',
                name: 'Hannah Stickers',
                canBeSold: true,
                id: 4,
            },
            {
                category: 'stickers',
                subcategory: 'merlijnStickers',
                name: 'Merlijn Stickers',
                canBeSold: true,
                id: 8,
            },
        {
            category: 'printedGoods',
            subcategory: 'stickersBook',
            name: 'Stickers Book',
            canBeSold: true,
            id: 13,
        },
        {
            category: 'printedGoods',
            subcategory: 'pokemonCard',
            name: 'Pokemon Proxy Card',
            canBeSold: true,
            id: 16,
        },
    
    {
        category: 'mainCategory',
        subcategory: 'accesoires',
        name: 'Accesoires',
        canBeSold: false,
        id: 0,
    },
        {
            category: 'accesoires',
            subcategory: 'keyChains',
            name: 'Key Chains',
            canBeSold: true,
            id: 5,
        },
        {
            category: 'accesoires',
            subcategory: 'plushyKeychain',
            name: 'Jiji Plushy Keychain',
            canBeSold: true,
            id: 10,
        },
        {
            category: 'accesoires',
            subcategory: 'mysteryBag',
            name: 'Key Chains',
            canBeSold: true,
            id: 6,
        },
        {
            category: 'accesoires',
            subcategory: 'buttons',
            name: 'Pride Buttons',
            canBeSold: true,
            id: 11,
        },
        {
            category: 'accesoires',
            subcategory: 'pins',
            name: 'Wooden pins',
            canBeSold: true,
            id: 12,
        },
    {
        category: 'mainCategory',
        subcategory: 'fashionItems',
        name: 'Fashion Items',
        canBeSold: false,
        id: 0,
    },
        {
            category: 'fashionItems',
            subcategory: 'hairclip',
            name: 'Plussle/Minum hairclip',
            canBeSold: true,
            id: 7,
        },
        {
            category: 'fashionItems',
            subcategory: 'handFan',
            name: 'Hand Fan',
            canBeSold: true,
            id: 9,
        },
    {
        category: 'mainCategory',
        subcategory: 'homeDecor',
        name: 'Home Decor',
        canBeSold: false,
        id: 0,
    },
            {
            category: 'homeDecor',
            subcategory: 'gleebleCushion',
            name: 'Gleeble Cushion',
            canBeSold: true,
            id: 14,
        },
        {
            category: 'homeDecor',
            subcategory: 'mousemats',
            name: 'Jirachi Mouse Mat',
            canBeSold: true,
            id: 15,
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

function declaredCheckButtons() {
    if (localStorage.getItem("buttons") === null) {
        let buttonsJSON = JSON.stringify(buttons);
        localStorage.setItem('buttons', buttonsJSON); 
        console.log('buttons are initialised! :)')
    }

    else {
        console.log('Buttons were already initialised :)')
    }
}

declaredCheckItemPrices();
declaredCheckSales();
declaredCheckButtons();