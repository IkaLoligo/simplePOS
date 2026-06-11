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
		productid: 0,
		buttonID: 'b1000',
	},
		{
			category: 'printedGoods',
			subcategory: 'prints',
			name: 'Prints',
			canBeSold: false,
			productid: 0,
			buttonID: 'b1100',
		},
			{
				category: 'prints',
				subcategory: 'a5',
				name: 'Print a5',
				canBeSold: true,
				productid: 1,
				buttonID: 'b1101',
			},
			{
				category: 'prints',
				subcategory: 'a4',
				name: 'Print a4',
				canBeSold: true,
				productid: 2,
				buttonID: 'b1102',
			},
			{
				category: 'prints',
				subcategory: 'eeveeRoll',
				name: 'Eevee Roll',
				canBeSold: true,
				productid: 3,
				buttonID: 'b1103',
			},
	{
		category: 'printedGoods',
		subcategory: 'stickers',
		name: 'Stickers',
		canBeSold: false,
		productid: 0,
		buttonID: 'b1200',
	},
		{
			category: 'stickers',
			subcategory: 'hannahStickers',
			name: 'Hannah Stickers',
			canBeSold: true,
			productid: 4,
			buttonID: 'b1201',
		},
		{
			category: 'stickers',
			subcategory: 'merlijnStickers',
			name: 'Merlijn Stickers',
			canBeSold: true,
			productid: 8,
			buttonID: 'b1202',
		},
	{
		category: 'printedGoods',
		subcategory: 'stickersBook',
		name: 'Stickers Book',
		canBeSold: true,
		productid: 13,
		buttonID: 'b1400',
	},
	{
		category: 'printedGoods',
		subcategory: 'pokemonCard',
		name: 'Pokemon Proxy Card',
		canBeSold: true,
		productid: 16,
		buttonID: 'b1500',
	},

	{
		category: 'mainCategory',
		subcategory: 'accesoires',
		name: 'Accesoires',
		canBeSold: false,
		productid: 0,
		buttonID: 'b2000',
	},
		{
			category: 'accesoires',
			subcategory: 'keyChains',
			name: 'Key Chains',
			canBeSold: true,
			productid: 5,
			buttonID: 'b2100',
		},
		{
			category: 'accesoires',
			subcategory: 'plushyKeychain',
			name: 'Jiji Plushy Keychain',
			canBeSold: true,
			productid: 10,
			buttonID: 'b2200',
		},
		{
			category: 'accesoires',
			subcategory: 'mysteryBag',
			name: 'Key Chains',
			canBeSold: true,
			productid: 6,
			buttonID: 'b2300',
		},
		{
			category: 'accesoires',
			subcategory: 'buttons',
			name: 'Pride Buttons',
			canBeSold: true,
			productid: 11,
			buttonID: 'b2400',
		},
		{
			category: 'accesoires',
			subcategory: 'pins',
			name: 'Wooden pins',
			canBeSold: true,
			productid: 12,
			buttonID: 'b2500',
		},
	{
		category: 'mainCategory',
		subcategory: 'fashionItems',
		name: 'Fashion Items',
		canBeSold: false,
		productid: 0,
		buttonID: 'b3000',
	},
		{
			category: 'fashionItems',
			subcategory: 'hairclip',
			name: 'Plussle/Minum hairclip',
			canBeSold: true,
			productid: 7,
			buttonID: 'b3100',
		},
		{
			category: 'fashionItems',
			subcategory: 'handFan',
			name: 'Hand Fan',
			canBeSold: true,
			productid: 9,
			buttonID: 'b3200',
		},
	{
		category: 'mainCategory',
		subcategory: 'homeDecor',
		name: 'Home Decor',
		canBeSold: false,
		productid: 0,
		buttonID: 'b4000',
	},
			{
			category: 'homeDecor',
			subcategory: 'gleebleCushion',
			name: 'Gleeble Cushion',
			canBeSold: true,
			productid: 14,
			buttonID: 'b4100',
		},
		{
			category: 'homeDecor',
			subcategory: 'mousemats',
			name: 'Jirachi Mouse Mat',
			canBeSold: true,
			productid: 15,
			buttonID: 'b4200',
		},
];


let sales = [

]

let lastBtnId = [

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

function declaredCheckLastBtnId() {
    if (localStorage.getItem("lastBtnId") === null) {
        let lastBtnIdJSON= JSON.stringify(lastBtnId);
        localStorage.setItem('lastBtnId', lastBtnIdJSON); 
        console.log('lastBtnIds are initialised! :)')
    }

    else {
        console.log('lastBtnIds were already loaded')
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
    let buttonsLocalCheck = JSON.parse(localStorage.getItem('buttons'));
    if (localStorage.getItem("buttons") === null || !buttonsLocalCheck == buttonsLocalCheck ) {
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
declaredCheckLastBtnId();