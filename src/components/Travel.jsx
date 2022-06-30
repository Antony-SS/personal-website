import React from "react";
import './styling/Travel.css'



const Travel = () => {
  return (
    <div className="travel">
      <div className="datacontainer">
        <div className="travelcard">
          <div className="row">

            <div className="window">
              <img alt="Anaga national park" class="travelpic" src={require("./resources/canary1.jpg")} />
              <input id='flap1' type='checkbox'></input>
              <label className='flap1' for='flap1'></label>
            </div>

            <div className="window">
              <img className="travelpic" alt="Anaga National Park" src={require("./resources/canary2.jpg")} />
              <input type='checkbox' id='flap2'></input>
              <label className='flap2' for='flap2'></label>
              {/* <div className="caption" id="caption2"><h1>ASDFASDF</h1></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;