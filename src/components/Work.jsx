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
        <h3>RecipEats</h3>
        <div className="row">
        <div className= "col align-items-center">

        <div class="laptopcontainer">
  <div class="laptop">
    <div class="laptop__screen"><img src= {require ("./resources/recipeats.png")} width="1600" height="1000" alt="Screen"/></div>
    <div class="laptop__bottom">
      <div class="laptop__under"></div>
    </div>
    <div class="laptop__shadow"></div>
  </div>
</div>
        </div>
        </div>
        <div className="description">
          <p>A terminal app to find recipes to cook based on ingredients you have in your fridge.  Utilizes webscraping to find recipes and text file manipulation to maintain a shopping list that lasts beyond the runtime of the program.  Written in pure C++.  </p>
        </div>
      </div>

      <div className="projectcard">
        <h3>Mountain Path Finder</h3>
        <div className="row">
        <div className= "col align-items-center">

        <div class="laptopcontainer">
  <div class="laptop">
    <div class="laptop__screen"><img src= {require ("./resources/pathfinder.png")} width="1600" height="1000" alt="Screen"/></div>
    <div class="laptop__bottom">
      <div class="laptop__under"></div>
    </div>
    <div class="laptop__shadow"></div>
  </div>
</div>
        </div>
        </div>
        <div className="description">
          <p>Takes an array of data representing elevations in a given region and generates a grayscale ppm image representing the area's elevations.  On top of that image, the program will highlight the path of least change of elevation in green, which is found using the greedy algorith.  Red lines represent "failed" paths.</p>
        </div>
      </div>
  
    </div>
      </div>
  );
}

export default Work;