import React from "react";
import "./styling/Work.css"

function Work() {
  return (
    <div className="work">
      <div className="datacontainer">

      <div className="projectcard">
        <h3>Song Share</h3>
        <div className="row">
        <div className= "col align-items-center">

        <div class="laptopcontainer">
  <div class="laptop">
    <div class="laptop__screen"><img src= {require ("./resources/songshare.png")} width="1600" height="1000" alt="Screen"/></div>
    <div class="laptop__bottom">
      <div class="laptop__under"></div>
    </div>
    <div class="laptop__shadow"></div>
  </div>
</div>
        </div>
        </div>
        <div className="description">
          <p>A dapp built on the Rinkeby ethereum testnet to exchange and browse music reccomendations.</p>
        </div>
      </div>

      <div className="projectcard">
        <h3>Song Share</h3>
        <div className="row">
        <div className= "col align-items-center">

        <div class="laptopcontainer">
  <div class="laptop">
    <div class="laptop__screen"><img src= {require ("./resources/songshare.png")} width="1600" height="1000" alt="Screen"/></div>
    <div class="laptop__bottom">
      <div class="laptop__under"></div>
    </div>
    <div class="laptop__shadow"></div>
  </div>
</div>
        </div>
        </div>
        <div className="description">
          <p>A dapp built on the Rinkeby ethereum testnet to exchange and browse music reccomendations.</p>
        </div>
      </div>
  
    </div>
      </div>
  );
}

export default Work;