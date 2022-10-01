import React from "react";
import "./styling/Work.css"

function Work() {
  return (
    <div className="work">
      <div className="datacontainer">

      <div className="projectcard">
        <h3>Decentralized Digital Identifier</h3>
        <div className="row">
        <div className= "col align-items-center">

        <div class="laptopcontainer">
  <div class="laptop">
    <div class="laptop__screen"><img src= {require ("./resources/SynchronyID.png")} width="1600" height="1000" alt="Screen"/></div>
    <div class="laptop__bottom">
      <div class="laptop__under"></div>
    </div>
    <div class="laptop__shadow"></div>
  </div>
</div>
        </div>
        </div>
        <div className="description">
          <p>Project exploring decentralized identity managment and passwordless authentication leveraging modified ERC721 NFTs.  Created as part of a summer internship.  Includes whitepaper and my final thoughts on the space.</p>
          <div className="linksholder">
          <a href="https://synchronyapplicationwebsite.netlify.app/">Website</a>
          <a href="https://github.com/Antony-SS/Decentralized-Digital-Identifier">Github</a>
          <a href="https://www.notion.so/antony-ss/Digital-Identity-Blockchain-ERC721-NFTs-for-Digital-Identity-Management-and-Passwordless-Authenti-024e10e4b1d048b18133b5c7bfc0e6a9">Whitepaper</a>
          </div>
        </div>
      </div>

      <div className="projectcard">
        <h3>Tutorial: Song Vote on Algorand</h3>
        <div className="row">
        <div className= "col align-items-center">

        <div class="laptopcontainer">
  <div class="laptop">
    <div class="laptop__screen"><img src= {require ("./resources/algorandtutorial.png")} width="1600" height="1000" alt="Screen"/></div>
    <div class="laptop__bottom">
      <div class="laptop__under"></div>
    </div>
    <div class="laptop__shadow"></div>
  </div>
</div>
        </div>
        </div>
        <div className="description">
          <p>A comprehensive tutorial for developers of all levels to create a voting dapp on the Algorand blockchain.  Created for a Gitcoin bounty, published to the Algorand developer docs, and voted 2nd best community tutorial.</p>
          <div className="linksholder">
          <a href="https://developer.algorand.org/tutorials/song-vote-on-algorand-create-and-deploy-a-fully-functioning-dapp/">Tutorial</a>
          <a href="https://github.com/Antony-SS/Song-Vote-on-Algorand---Create-and-deploy-a-fully-functioning-Dapp">Github</a>
          <a href="https://song-vote-algorand-final-frontend.antony-ss.repl.co/">Website</a>
          </div>
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
          <div className="linksholder">
          <a href="https://blockchain-twitter-frontend--antony-ss.repl.co/">Website</a>
          <a href="https://github.com/Antony-SS/Blockchain-Twitter-Frontend">Github</a>
          </div>
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
          <div className="linksholder">
          <a href="https://github.com/Antony-SS/RecipEats">Github</a>
          </div>
        </div>
      </div>

      <div className="projectcard">
        <h3>Path Finder</h3>
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
          <p>Takes an array of data representing elevations in a given region and generates a grayscale ppm image representing the area's elevations.  On top of that image, the program will highlight the path of least change of elevation in green, which is found using the greedy algorithm.  Red lines represent "failed" paths.  Could be improved by implementing recursive backtracking.</p>
          <div className="linksholder">
          <a href="https://github.com/Antony-SS/EasiestPathFinder">Github</a>
          </div>
        </div>
      </div>
  
    </div>
      </div>
  );
}

export default Work;