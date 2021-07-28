import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";


const Container = styled.div`
  width: 100%;
  margin: 30px auto 0 auto;
  text-align: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;

function Success() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <div>
      <Container>
        <Confetti width={width} height={height} numberOfPieces={450} />
        <Title>Thank you!</Title>
        <Message>When you donate to Grow Orlando you sow the seeds of potential in a child's life.</Message>
      </Container>
      </div>
  );
};

export default Success;
