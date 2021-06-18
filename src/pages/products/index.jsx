//creates and renders the products page
import React from 'react';
import Seo from '../../components/seo';
import Product from './product';

import products from '../../data/products.json';

export default function ProductsPage({}) {
  return (
    <>
      <Seo title='Our products are awesome' />
      <h1>Welcome to our store!</h1>
    //creates a div with the classname products that maps over all products and dynamically sets the key equal to the product's id
    //and spreads each product into an individual item to be rendered 
      <div className='products'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
