import React from "react";
import "./style.css";
import  { MDBIcon } from "mdbreact";





function Donate() {
    const nameEl = React.useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    alert(nameEl.current.value);
  };

  return (
    
   


   <div className="donate__card">
   <div className="donate__widget">
       <img src="https://i.imgur.com/gCIu3Wl.png" className="donate__widget__image"></img>
       <div className="widget__body">
        <p className="widget__header">
            When you donate, you help sow the seeds of potential in a child's life
        </p>
        <label className="widget__input__label" for="widget_input">$</label>
        <input labelfor="$" className="widget__input" type="number"></input>
        <input placeholder="Enter Amount" value="Give Now!" type="submit" class="widget__submit"></input>
            <br></br>
            <a target="_blank" className="icon__link" href="https://stripe.com/"><MDBIcon className="stripe__icon" fab icon="stripe" /></a>

       </div>
       </div>
       
   </div>
        

       
    
  );
}





export default Donate;