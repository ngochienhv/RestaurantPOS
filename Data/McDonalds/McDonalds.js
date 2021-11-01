//img = id
const foodArray = [
    {ID:"1", name:"Fried Chicken", type:"Fried Chicken", price:36000},
    {ID:"2", name:"Fried Chicken - 3 PCs", type:["Fried Chicken","Set"], price:99000},
    {ID:"3", name:"Fried Chicken - 9 PCs", type:["Fried Chicken","Set"], price:289000},
    {ID:"4", name:"Fried Chicken Meal - 2 PCs", type:["Fried Chicken", "Set"], price:86000},
    {ID:"5", name:"Chicken Nuggets - 4 PCs", type:["Fried Chicken", "Set"], price:36000},
    {ID:"6", name:"Chicken Nuggets - 9 PCs", type:["Fried Chicken", "Set"], price:69000},

    {ID:"7", name:"Burger Bulgogi", type:["Burger", "Beef"], price:79000},
    {ID:"8", name:"Cheeseburger", type:["Burger", "Beef"], price:49000},
    {ID:"9", name:"Double Cheeseburger", type:["Burger", "Beef"], price:49000},
    {ID:"10", name:"Chicken Burger", type:["Burger","Chicken"], price:32000},
    {ID:"11", name:"Double Chicken Burger", type:["Burger","Chicken"], price:79000},
    {ID:"12", name:"Fish Burger", type:["Burger","Fish"], price:49000},
    {ID:"13", name:"Pork Burger", type:["Burger","Pork"], price:32000},
    
    {ID:"14", name:"Grilled Pork Rice", type:["Meal","Pork"], price:46000},
    {ID:"15", name:"Grilled Pork Rice with Egg", type:["Meal","Pork"], price:66000},
    {ID:"16", name:"Chicken Rice", type:["Meal","Chicken"], price:46000},
    {ID:"17", name:"Spicy Sauce Chicken Rice", type:["Meal","Chicken"], price:90000},
    {ID:"18", name:"Fried Chicken Rice", type:["Meal","Fried Chicken"], price:42000},

    {ID:"19", name:"Sprite", type:"Beverage", price:20000},
    {ID:"20", name:"Coca-Cola", type:"Beverage", price:20000},
    {ID:"21", name:"Lychee Black Tea", type:"Beverage", price:45000},
    {ID:"22", name:"Fanta", type:"Beverage", price:20000},
    {ID:"23", name:"Dasani Water", type:"Beverage", price:20000},
    {ID:"24", name:"Sprite - L", type:"Beverage", price:20000},
    {ID:"25", name:"Coca-Cola - L", type:"Beverage", price:20000},
    {ID:"26", name:"Fanta - L", type:"Beverage", price:20000},

    {ID:"27", name:"Vanilla Cone", type:"Desert", price:10000},
    {ID:"28", name:"Apple Pie", type:["Desert","Snacks"], price:25000},
    {ID:"29", name:"Sundae Chocolate", type:"Desert", price:29000},
    {ID:"30", name:"Sundae Strawberry", type:"Desert", price:29000},
    {ID:"31", name:"Oreo Flurry", type:"Desert", price:36000},

    {ID:"32", name:"French Fries - S", type:"Snacks", price:16000},
    {ID:"33", name:"French Fries - M", type:"Snacks", price:26000},
    {ID:"34", name:"French Fries - L", type:"Snacks", price:36000},

    {ID:"35", name:"Combo 1", type:"Combo", price:81000},
    {ID:"36", name:"Combo 2", type:"Combo", price:129000},
    {ID:"37", name:"Combo 3", type:"Combo", price:169000},
    {ID:"38", name:"Combo 4", type:"Combo", price:179000},
    {ID:"39", name:"Combo 5", type:"Combo", price:269000},
    {ID:"40", name:"Combo 6", type:"Combo", price:279000},
];

