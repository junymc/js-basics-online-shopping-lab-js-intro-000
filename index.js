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
   totalPrice = cart.itemPrice[i] + cart.itemPrice[i + 1]
  }
  return totalPrice
}

// function removeFromCart(item) {
//   if () {
//     return "That item is not in your cart."
//   }
//
// }
//
// function placeOrder(cardNumber) {
//   // write your code here
// }
