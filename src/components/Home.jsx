import React from "react";
import "./styling/Home.css"

function Home() {
  return (
    <div className="home">
      <div class="data-container">
        <div class="row align-items-center my-5">
          <div class="col-lg-4">
            <img
              class="profilepic"
              src= {require("./resources/download.jpeg")}
              alt=""
              />
          </div>
          <div class="col-lg-8">
            <h1 class="font-weight-light">🙎🏼‍♂️ About</h1>
            <p>
              Hi, I'm Antony.  I'm studying Industiral Engineering and Computer Science @ UIUC.  Interested in web3, electric vehicles, sustainability and design.
            </p>
            <p>
             Working as a freelance developer on a variety of projects and bounties.  
            </p>
            <p>Born in Germany, raised in Illinois, and currently studying abroad in Madrid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;