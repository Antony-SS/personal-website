import React from "react";
import "./styling/Home.css"

function Home() {
  return (
    <div className="home">
      <div class="data-container">
        <div class="row align-items-center my-5">
          <div class="pic-col">
            <img
              class="profilepic"
              src= {require("./resources/portfolioimage1.jpeg")}
              alt=""
              />
          </div>
          <div class="col-lg-8">
            <h2>🙎🏼‍♂️ About</h2>
            <p style={{fontSize: "16.5px"}}>
              Hi, I'm Antony.  I'm studying Industrial Engineering and Computer Science @ UIUC.  Interested in blockchain, autonomous systems, and nature.  
            </p>
            <p style={{fontSize: "16.5px"}}>
              Currently trying out product managment with EY Blockchain and tinkering with an arduino.  
            </p>
            <p style={{fontSize: "16.5px"}}>
              I play soccer, lift, read fiction, and enjoy travelling.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;