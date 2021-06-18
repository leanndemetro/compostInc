import React, { useState, useContext } from 'react';
import CartContext from '../../components/cart/context';

import './styles.css';

//creates and exports a function that takes in an item's seeded data
export default function Product({
  id,
  name,
  imageUrl,
  price,
  tags,
  colors,
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
        //when hover occurs create a div with the className add-to-cart, that when clicked, adds product id, name and price to the cart state.
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
          +<div>add to cart</div>
        </div>
      )}
      //creates a div with the classname care that renders product seed data as a tangible card 
      <div className='card'>
        <img src={imageUrl} alt={name} />
        <div className='name'>{name}</div>
        <div className='price'>Price: {price}</div>
          //adds tags (options) for each product from seed data
        <div className='tags'>
          Tags:{' '}
          {tags.map((tag) => (
            <span className='tag'>{tag}</span>
          ))}
        </div>
            //more tags 
        <div className='tags'>
          Available in:{' '}
          {colors.map((color) => (
            <span className='tag'>{color}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
