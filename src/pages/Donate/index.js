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
    
     </MDBContainer>
      </div>  

       
    
  );
}





export default Donate;