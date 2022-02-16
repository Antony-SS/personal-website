import React from "react";
import './styling/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-light fixed-bottom">
      <div className="sign-wrapper">
      <div className="socials-sign">
        <h4>CONTACT</h4>
<div className="socials-rows">
              <div className= "col">
              <img
                class="social"
                src= {require("./resources/twitter-sign.png")}
                alt=""
              />
              </div>
              <div className= "col">
              <a href="https://github.com/Antony-SS">
              <img
                class="social"
                src= {require("./resources/github.png")}
                alt=""
              />
              </a>
              </div>
              <div className= "col align-items-center">
              <img
                class="social"
                src= {require("./resources/email.png")}
                alt=""
              />
              </div>
            </div>
</div>

      </div>
        {/* <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Antony's Personal Website
          </p>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;