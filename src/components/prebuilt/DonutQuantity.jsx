import styled from "@emotion/styled";

const Input = styled.input`
  width: 80px;
  padding: 0 12px;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  outline: none;
  background: transparent;
  color: black;
  height: 40px;
  user-select: none;
`;

const Button = styled.span`
  display: inline-block;
  width: 30px;
  line-height: 38px;
  color: #fff;
  height: 40px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background-color: #f6a4eb;
  user-select: none;
`;



const DonutQuantity = ({ quantity }) => {
  return (
    <>
      
      <Input type="number" value={quantity} />
    </>
  );
};

export default DonutQuantity;
