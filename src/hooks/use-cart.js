//imports the ability to use and update state
import { useState } from 'react';

//creates and exports a function called useCart that gets selected product data and sets it to update the state via an array of product information
export default function useCart() {
  const [cartItems, setCartItems] = useState([]);

  //passes in a selected product to this function
  function addToCart(product) {
    //sets the cart to it's state prior to any changes
    setCartItems((prev) => {
      //sets a variable called existing to any added cartItems, seeks through each item and filters the item id out (from seeded json data) to ensure it is absolutely equal to the value of the product id.
      const existing = cartItems.find(
        (item) => item.id === product.id,
      );
      //returns all item id's
      return existing
      //maps over all cartItems and spreads them into individual values
        ? [
            ...cartItems.map((item) =>
            //ensures item and product ids are absolute equals
              item.id === product.id
              //if the above statement is truthy and the id's match, add the item and 1 to the quantity
                ? { ...item, qty: item.qty + 1 }
                //if it is false, just add the item but to not add to the quantity
                : item,
            ),
          ]
          //if  it's still in the previous state, all the product seed data and add the qty (of 1) to it within the cart
        : [...prev, { ...product, qty: 1 }];
    });
  }

  //a function that removes a product from the cart in the item and product ids do not match
  function removeFromCart(product) {
    setCartItems((prev) => [
      ...prev.filter((item) => item.id !== product.id),
    ]);
  }

  //a function that removes a product from the cart if the quantity is equal to zero
  function changeQty(product, qty) {
    if (qty === 0) return removeFromCart(product);

    setCartItems((prev) => [
      ...prev.map((item) =>
        item.id === product.id ? { ...item, qty } : item,
      ),
    ]);
  }

  //renders each option the page
  return {
    cartItems,
    addToCart,
    removeFromCart,
    changeQty,
  };
}
