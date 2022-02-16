import React from "react";
import './styling/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <footer class="footer-container">
        <div className="row">

              <div className= "col align-items-center">
              <a href="https://twitter.com/Johann_Antony">
              <img
                class="social"
                src= {require("./resources/twitter-sign.png")}
                alt=""
                />
                </a>
              </div>
              <div className= "col align-items-center">
              <a href="https://github.com/Antony-SS">
              <img
                class="social"
                src= {require("./resources/github.png")}
                alt=""
                />
              </a>
              </div>
              <div className= "col align-items-center">
              <a href="mailto:antony@silvettischmitt.net">

              <img
                class="social"
                src= {require("./resources/email.png")}
                alt=""
                />
              </a>
              </div>
                </div>
      </footer>
    </div>
  );
}

export default Footer;