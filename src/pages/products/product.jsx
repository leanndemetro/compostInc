import React, { useState, useContext } from 'react';
import CartContext from '../../components/cart/context';


import './styles.css';

//creates and exports a function that takes in an item's seeded data
export default function Product({
  id,
  name,
  price,
}) {
  //creates a get (hover) and set (setHover) method that can't update the state but will ultimate change settings in some way
  const [hover, setHover] = useState(false);
  //creates a variable to add to card and sets it equal to the cart's current state
  const { addToCart } = useContext(CartContext);
  return (
    //returns a div which has a className equal to the product data whether hovering or not"
    <div
      className={`product ${hover && 'hover'}`}
      //when the mouse clicks on it, updates the cart state
      onMouseEnter={() => setHover(true)}
      //when the mouse leave it is not able to update
      onMouseLeave={() => setHover(false)}>
      {hover && (
        <div
          className='add-to-cart'
          onClick={() =>
            addToCart({
              id,
              name,
              price,
            })
          }>
          +
        </div>
      )}
      <div className='card'>
        <div className='price'>${price}</div>
      </div>
    </div>
  );
}
