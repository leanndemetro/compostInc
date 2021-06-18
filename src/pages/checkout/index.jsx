//creates and renders the checkout page and imports the cart component
import React from 'react';
import Seo from '../../components/seo';
import Cart from '../cart';

export default function CheckoutPage() {
  return (
    <>
      <Seo title='Buy your stuff now!' />
      <h1>Buy my stuff!</h1>
      <Cart />
    </>
  );
}
