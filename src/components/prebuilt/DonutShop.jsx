import styled from "@emotion/styled";
import { useState } from "react";
import Image from "./Image";
import CheckoutForm from "../CheckoutForm";
import "../Nav/style.css";
import getDonutPrice from "../../utils/get-donut-price";

const Shop = styled.div`
  padding: 20px;
`;

const ShopName = styled.h1`
  font-size: 40px;
  color: #b6c2a4;
  margin-bottom: 20px;
  text-align: center;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

function DonutShop(props) {
  //set the state of the input to an empty array
  const [dollarAmount, setDollarAmount] = useState("");

 //pass the new value of dollar amount into a function that updates the numDonuts value state to it's value
  
  return (
    <div>
      {/* //create input */}
      <label className="dollarSign">
        $ 
        {/* //update the state to the value entered into the input */}
        <input
        className="dollarInput"
          type="number"
          onChange={e => setDollarAmount(e.target.value)}
        />
      </label>

      <CheckoutForm
        price={getDonutPrice(dollarAmount)}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
      </div>
  );
};

export default DonutShop;
