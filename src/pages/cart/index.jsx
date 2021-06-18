//creates an renders the my cart page and imports the cart component
import React, { useContext } from 'react';
import Seo from '../../components/seo';
import Cart from '../cart';

export default function CartPage() {
  return (
    <>
      <Seo title='My cart' />
      <h1>My cart</h1>
      <Cart />
    </>
  );
}
