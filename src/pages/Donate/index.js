import React from "react";
import "./style.css";
import  { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput} from "mdbreact";





function Donate() {
    const nameEl = React.useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    alert(nameEl.current.value);
  };

  return (
    <div>
   <MDBContainer>
     <img className="donateImg" src="https://i.imgur.com/28uIy3J.jpg"></img>
     <p>
       <hr className="donateNow"></hr>
       DONATE NOW<MDBIcon icon="chevron-circle-right arrow" />
       <hr></hr></p>
     <MDBRow>
       <MDBCol><img className="donateImg" src="https://i.imgur.com/DFxtlOu.jpg"></img></MDBCol>
       <MDBCol><img className="donateImg" src="https://i.imgur.com/sSQe6JO.jpg"></img></MDBCol>
     </MDBRow>
     <br></br>
     <MDBRow>
       <MDBCol><img className="donateImg" src="https://i.imgur.com/jEaw389.jpg"></img></MDBCol>
       <MDBCol><img className="donateImg" src="https://i.imgur.com/D4qNOZc.jpg"></img></MDBCol>
     </MDBRow>
     </MDBContainer>
      </div>  

       
    
  );
}





export default Donate;