//imports react for use with the context array created within context.js, which as also imported
//imports the currency format spelled out in string.js (modules)
import React, { useContext } from 'react';
import Context from './context';
import { formatCurrency } from '../../modules/string';

//a function that sets dynamic variables (cartItems take in selected product information)
//(changeQty sets the quantity of each item added to cart,) these variables will be used to update the cart state via the code in context.js
export default function Cart() {
  const { cartItems, changeQty } = useContext(Context);

  return (
    //renders a simple table with the listed headings
    <table width='100%' cellSpacing={0} cellPadding={0}>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>

      //maps over all products within the cart (and their data seeds) and lists each within the table created above as new columns 
      <tbody> 
        {cartItems.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            //takes in the quantity set within function above
            <td>
              <input
                type='text'
                value={product.qty}
                onChange={(e) =>
                  changeQty(product, parseInt(e.target.value))
                }
              />
            </td>
            //takes in product price and multiplies it by the quantity to get total cost
            <td>{formatCurrency(product.price * product.qty)}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
