//creates and renders the products page
import React from 'react';
import Seo from '../../components/seo';
import Product from './product';

import products from '../../data/products.json';
import "./styles.css";
import {
  MDBContainer, MDBBtn, MDBRow, MDBCol
} from "mdbreact";
export default function ProductsPage({}) {
  return (
    <>
    <MDBContainer>
      <MDBRow>
        <MDBCol size="6">
      <div className="productDiv">
      <p className="donateHeader">DONATE</p>
      <hr></hr>
    <div className='products'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      </div>
      </MDBCol>
      <MDBCol size="6"></MDBCol>
      </MDBRow>
      </MDBContainer>
    </>
  );
}
