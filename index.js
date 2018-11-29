var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = parseInt(Math.random()*(100 - 1) + 1)
 var shoppingItem = {itemName:item,itemPrice:price}
  cart.push(shoppingItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
 // var item = cart[0]
 //  if (cart.length === 1) {
 //    return `In your cart, you have ${item.itemName} at $${item.itemPrice}.`
 //  }
  // var item2 = cart[1]
  // if (cart.length === 2) {
  //   return `In your cart, you have ${item.itemName} at $${item.itemPrice}, and ${item2.itemName} at $${item2.itemPrice}.`
  // }
  var string = "In your cart, you have "
  for (let i = 0; i < cart.length; i++) {
   if (cart.length - 1 === i && i != 0) {
     string = string.concat("and ")
   }
   var itemX = cart[i]
     string = string.concat(`${itemX.itemName} at $${itemX.itemPrice}`)
   if (cart.length - 1 != i) {
     string = string.concat(", ")
   } else {
     string = string.concat(".")
   }// If it's not the last item in the cart, add , and space
   // else, add .
 }
  return string
}

function total() {
  var totalPrice = 0
  for(let i = 0; i < cart.length; i++) {
  var itemX = cart[i]
   totalPrice += itemX.itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
 // let cart = getCart()
  for (let i = 0; i < cart.length; i++) {
   if (cart[i].itemName === item) {
     cart.splice(i, 1)
     return cart
   }
 }
 return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  var totalCost = total()

  if (cardNumber) {
    console.log(cart.length = 0)
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
