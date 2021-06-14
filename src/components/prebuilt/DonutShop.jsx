import styled from "@emotion/styled";

import Image from "./Image";
import DonutQuantity from "./DonutQuantity";

const Shop = styled.div`
  padding: 40px;
`;



const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DonutShop = ({ onAddDonut, onRemoveDonut, numDonuts }) => {
  return (
    <Shop>
      <Image src="https://i.imgur.com/gCIu3Wl.png" width="100px"></Image>
      <Controls>
        <DonutQuantity
          onAdd={onAddDonut}
          onRemove={onRemoveDonut}
          quantity={numDonuts}
        />
      </Controls>
    </Shop>
  );
};

export default DonutShop;
