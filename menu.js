const foods=[


{name:"Chicken Biryani",price:120,type:"rice items"},
{name: "Biryani", price: 250, type: "rice items"},
{name: "Jeera Rice", price: 120, type: "rice items"},
{name: "Tomato Rice", price: 150, type: "rice items"},
{name: "Lemon Rice", price: 130, type: "rice items"},
{name: "Ghee Rice", price: 140, type: "rice items"},
{name: "Coconut Rice", price: 140, type: "rice items"},
{name: "Puliyodarai", price: 150, type: "rice items"},
{name: "Fried Rice", price: 160, type: "rice items"},
{name: "Sambar Rice", price: 130, type: "rice items"},
{name: "Bisi Bele Bath", price: 180, type: "rice items"},

{name:"Milkshake",      price:50,  type:"beverages"},
{name:"Banoffee High",       price:150, type:"dessert"},
{name:"Lemon Tart",          price:125, type:"dessert"},
{name:"Chocolate Mousse Cup",price:160, type:"dessert"},
{name:"Strawberry Cupcake",  price:125, type:"dessert"},
{name:"Chocolate & Caramel Tart", price:150, type:"dessert"},
{name:"Chocolate Cupcake",   price:130, type:"dessert"},
{name:"Tiramisu Cup",        price:180, type:"dessert"},

{name:"Samosa", price:30, type:"snacks"},
{name:"Paneer Tikka", price:50, type:"snacks"},
{name:"Vegetable Pakora", price:40, type:"snacks"},
{name:"Dhokla", price:35, type:"snacks"},
{name:"Aloo Tikki", price:25, type:"snacks"},
{name:"Bhel Puri", price:20, type:"snacks"},
{name:"Pav Bhaji", price:60, type:"snacks"},
{name:"Spring Rolls", price:45, type:"snacks"},
{name:"Momos", price:50, type:"snacks"},
{name:"Cheese Balls", price:55, type:"snacks"},
{name:"French Fries", price:30, type:"snacks"},
{name:"Onion Rings", price:40, type:"snacks"},
{name:"Chicken Nuggets", price:70, type:"snacks"},
{name:"Cheeseburger",   price:70,  type:"snacks"},
{name:"Double Bacon Cheeseburger",price:100,type:"snacks"},
{name:"French Fries",   price:30,  type:"snacks"},
{name:"Onion Rings",    price:40,  type:"snacks"},

{name:"Gulab Jamun", price: 120, type:"sweet"},
{name:"Jalebi", price: 80, type:"sweet"},
{name:"Kaju Katli", price: 550, type:"sweet"},
{name:"Rasgulla", price: 140, type:"sweet"},
{name:"Ladoo", price: 40, type:"sweet"},
{name:"Barfi", price: 150, type:"sweet"},
{name:"Sandesh", price: 180, type:"sweet"},
{name:"Mysore Pak", price: 100, type:"sweet"},
{name:"Soan Papdi", price: 70, type:"sweet"},
{name:"Kalakand", price: 160, type:"sweet"},
{name:"Gulab Jamun",    price:40, type:"sweet"},

{name: "Milkshake", price: 50, type: "beverages"},
{name: "Thums Up", price: 39, type: "beverages"},
{name: "Sprite", price: 39, type: "beverages"},
{name: "Coca Cola", price: 70, type: "beverages"},
{name: "Nescafe Coffee", price: 60, type: "beverages"},
{name: "Mango Juice", price: 85, type: "beverages"},
{name: "Apple Juice", price: 30, type: "beverages"},
{name: "Jeera Masala Soda", price: 10, type: "beverages"},
{name: "Lemon Soft Drink", price: 10, type: "beverages"},
{name: "Orange Drink", price: 140, type: "beverages"},

{name: "Chicken Tikka Masala", price: 350, type: "curry"},
{name: "Paneer Butter Masala", price: 300, type: "curry"},
{name: "Kashmiri Dum Aloo", price: 250, type: "curry"},
{name: "Egg Curry", price: 200, type: "curry"},
{name: "Mutton Curry", price: 450, type: "curry"},
{name: "Vegetable Curry", price: 220, type: "curry"},
{name: "Dal Makhani", price: 180, type: "curry"},
{name: "Butter Chicken", price: 400, type: "curry"},
{name: "Chana Masala", price: 180, type: "curry"},
{name: "Chicken Curry", price: 350, type: "curry"},
{name:"Dal Makhani",    price:90, type:"curry"},
{name:"Paneer Tikka",   price:50, type:"curry"},


  {name: "Wheat Chapati", price: 6, type: "rotis"},
  {name: "Frozen Chapati", price: 50, type: "rotis"},
  {name: "Butter Chapati", price: 25, type: "rotis"},
  {name: "Millet Chapati", price: 75, type: "rotis"},
  {name: "Stuffed Chapati", price: 40, type: "rotis"},
  {name: "Almond Flour Chapati", price: 60, type: "rotis"},
  {name: "Tandoori Roti", price: 10, type: "rotis"},
  {name: "Rumali Roti", price: 9, type: "rotis"}

]

displayall()
function displayall(){const all=document.querySelector(".menubody")
all.innerHTML=foods.map(food=>`<p>${food.name} Rs.${food.price}</p>`).join("")}

function choosefood()
{const selected=document.querySelector("#dropdownfood")
 const filterfood=foods.filter(food=>food.type===selected.value); 
 console.log(filterfood);



const body = document.querySelector(".menubody");

body.innerHTML=filterfood.map(food=>`<p>${food.name} Rs.${food.price}</p>`).join("")




}