let items = [
    {
        name:"print a5",
		productId: 1,
        price: 5,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"print a4",
		productId: 2,
        price: 10,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },	
    {
        name:"Eevee roll",
		productId: 3,
        price: 3,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Sticker Hannah",
		productId: 4,
        price: 2,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Sticker Merlijn",
		productId: 5,
        price: 2,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Stickerbook",
		productId: 6,
        price: 8,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Pokemon proxy card",
		productId: 7,
        price: 5,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Key chain",
		productId: 8,
        price: 7,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Plushy keychain",
		productId: 9,
        price: 15,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Mysterybag",
		productId: 10,
        price: 7,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Pride Buttons",
		productId: 11,
        price: 3,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Wooden pins",
		productId: 12,
        price: 3,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"hairclip",
		productId: 13,
        price: 7,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
    {
        name:"Hand fan",
		productId: 14,
        price: 7,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },	
    {
        name:"Gleeble Cushion",
		productId: 15,
        price: 25,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },
	    {
        name:"Jirachi Mousemat",
		productId: 16,
        price: 20,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },		
	{
        name:"pkm tas",
		productId: 17,
        price: 15,
        currentCustomerCount: 0,
        totalBoughtPeriodCount: 0,
        totalBoughtPeriodRevenue: 0,
    },			
]

let buttons = [
	{
		category: 'mainCategory',
		subCategory: 'printedGoods',
		name: 'Printed Goods',
		canBeSold: false,
		productid: 0,
		buttonID: 'b1000',
	},
		{
			category: 'printedGoods',
			subCategory: 'prints',
			name: 'Prints',
			canBeSold: false,
			productid: 0,
			buttonID: 'b1100',
		},
			{
				category: 'prints',
				subCategory: 'a5',
				name: 'Print a5',
				canBeSold: true,
				productid: 1,
				buttonID: 'b1101',
			},
			{
				category: 'prints',
				subCategory: 'a4',
				name: 'Print a4',
				canBeSold: true,
				productid: 2,
				buttonID: 'b1102',
			},
			{
				category: 'prints',
				subCategory: 'eeveeRoll',
				name: 'Eevee Roll',
				canBeSold: true,
				productid: 3,
				buttonID: 'b1103',
			},
	{
		category: 'printedGoods',
		subCategory: 'stickers',
		name: 'Stickers',
		canBeSold: false,
		productid: 0,
		buttonID: 'b1200',
	},
		{
			category: 'stickers',
			subCategory: 'hannahStickers',
			name: 'Hannah Stickers',
			canBeSold: true,
			productid: 4,
			buttonID: 'b1201',
		},
		{
			category: 'stickers',
			subCategory: 'merlijnStickers',
			name: 'Merlijn Stickers',
			canBeSold: true,
			productid: 5,
			buttonID: 'b1202',
		},
	{
		category: 'printedGoods',
		subCategory: 'stickersBook',
		name: 'Stickers Book',
		canBeSold: true,
		productid: 6,
		buttonID: 'b1400',
	},
	{
		category: 'printedGoods',
		subCategory: 'pokemonCard',
		name: 'Pokemon Proxy Card',
		canBeSold: true,
		productid: 7,
		buttonID: 'b1500',
	},

	{
		category: 'mainCategory',
		subCategory: 'accesoires',
		name: 'Accesoires',
		canBeSold: false,
		productid: 0,
		buttonID: 'b2000',
	},
		{
			category: 'accesoires',
			subCategory: 'keyChains',
			name: 'Key Chains',
			canBeSold: true,
			productid: 8,
			buttonID: 'b2100',
		},
		{
			category: 'accesoires',
			subCategory: 'plushyKeychain',
			name: 'Jiji Plushy Keychain',
			canBeSold: true,
			productid: 9,
			buttonID: 'b2200',
		},
		{
			category: 'accesoires',
			subCategory: 'mysteryBag',
			name: 'Key Chains',
			canBeSold: true,
			productid: 10,
			buttonID: 'b2300',
		},
		{
			category: 'accesoires',
			subCategory: 'buttons',
			name: 'Pride Buttons',
			canBeSold: true,
			productid: 11,
			buttonID: 'b2400',
		},
		{
			category: 'accesoires',
			subCategory: 'pins',
			name: 'Wooden pins',
			canBeSold: true,
			productid: 12,
			buttonID: 'b2500',
		},
	{
		category: 'mainCategory',
		subCategory: 'fashionItems',
		name: 'Fashion Items',
		canBeSold: false,
		productid: 0,
		buttonID: 'b3000',
	},
		{
			category: 'fashionItems',
			subCategory: 'hairclip',
			name: 'Plussle/Minum hairclip',
			canBeSold: true,
			productid: 13,
			buttonID: 'b3100',
		},
		{
			category: 'fashionItems',
			subCategory: 'handFan',
			name: 'Hand Fan',
			canBeSold: true,
			productid: 14,
			buttonID: 'b3200',
		},
		{
			category: 'fashionItems',
			subCategory: 'Tas',
			name: 'Pokemon tas',
			canBeSold: true,
			productid: 17,
			buttonID: 'b3300',
		},
	{
		category: 'mainCategory',
		subCategory: 'homeDecor',
		name: 'Home Decor',
		canBeSold: false,
		productid: 0,
		buttonID: 'b4000',
	},
			{
			category: 'homeDecor',
			subCategory: 'gleebleCushion',
			name: 'Gleeble Cushion',
			canBeSold: true,
			productid: 15,
			buttonID: 'b4100',
		},
		{
			category: 'homeDecor',
			subCategory: 'mousemats',
			name: 'Jirachi Mouse Mat',
			canBeSold: true,
			productid: 16,
			buttonID: 'b4200',
		},
];


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
