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
              Hi, I'm Antony.  I'm studying Industiral Engineering and Computer Science @ UIUC.  Interested in web3, electric vehicles, and good design.
            </p>
            <p>
             Currently working as a freelance developer on a variety of projects.  Currently studying abroad in Madrid and documenting my travels.
            </p>
            <div className="row align-items-center">
              <div className= "col-lg-1">
              <img
                class="social"
                src= {require("./resources/twitter-sign.png")}
                alt=""
              />
              </div>
              <div className= "col-lg-1">
              <img
                class="social"
                src= {require("./resources/github.png")}
                alt=""
              />
              </div>
              <div className= "col-lg-1">
              <img
                class="email"
                src= {require("./resources/email.png")}
                alt=""
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;