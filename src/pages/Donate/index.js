
import CheckoutForm from "../../components/CheckoutForm";
import DonutShop from "../../components/prebuilt/DonutShop";
import "./style.css";
import {
  MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon
} from "mdbreact";

function Donate() {


  return (
      <MDBContainer>
        <MDBRow>
        <MDBCol size="1"></MDBCol>
        <MDBCol size="10">
        <div className="donateDiv">
        <DonutShop />
    </div>
        </MDBCol>
        <MDBCol size="1"></MDBCol>
        </MDBRow>
      </MDBContainer>
   
  );
};

export default Donate;


