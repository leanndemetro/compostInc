//creates and renders the products page
import React from 'react';
import Seo from '../../components/seo';
import Product from './product';

import products from '../../data/products.json';
import "./styles.css";

export default function ProductsPage({}) {
  return (
    <>
      <div className="productDiv">
      <h1>Welcome to our store!</h1>
    //creates a div with the classname products that maps over all products and dynamically sets the key equal to the product's id
    //and spreads each product into an individual item to be rendered 
      <div className='products'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      </div>
    </>
  );
}
