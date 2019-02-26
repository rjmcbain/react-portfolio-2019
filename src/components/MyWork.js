import React, { Component } from "react";

class MyWork extends Component {
  render() {
    return (
      <main id="work">
        <h1 class="lg-heading">
          My
          <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">Check out some of my projects...</h2>
        <div class="projects">
          <div class="item">
            <a
              href="https://devconnectorreactapp.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/projects/showcase.jpg" alt="devconnector" />
            </a>
            <a
              href="https://devconnectorreactapp.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/rjmcbain/devconnector"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
            {/* <!-- Modal 1 --> */}
          </div>
          <div class="portfolio-modal">
            <img
              src="img/projects/showcase.jpg"
              alt="devconnector"
              class="portfolio-full-width"
            />
            <button class="modal-close">
              <svg x="0px" y="0px" viewBox="0 0 30 17" height="17" width="30">
                <g transform="translate(-15 -15)">
                  <polygon
                    class="st0"
                    points="31.2,23.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 28.8,23.5 23,17.7 24.2,16.5 30,22.3 
           35.8,16.5 37,17.7 	"
                  />
                </g>
              </svg>
            </button>
            <div class="portfolio-header">
              <div class="portfolio-title-box">
                <h2 class="portfolio-title">Dev Connector</h2>
                <p class="portfolio-subtitle">Fullstack Web App</p>
              </div>
            </div>
            <div class="portfolio-content">
              <p>Add Text</p>
            </div>
          </div>
          <div class="item">
            <a
              href="https://beer-trader.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/projects/beer.jpg" alt="beertrader" />
            </a>
            <a
              href="https://beer-trader.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/rjmcbain/beertrader"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          <div class="item">
            <a
              href="gradius/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/projects/gradius.png" alt="gradius" />
            </a>
            <a
              href="gradius/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/rjmcbain/Gradius"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          <div class="item">
            <a
              href="https://valkyrieapp.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/projects/valkyrie.png" alt="valkyrie" />
            </a>
            <a
              href="https://valkyrieapp.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/rjmcbain/valkyrie"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          <div class="item">
            <a
              href="wordbeater/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/projects/wordbeater.png" alt="wordbeater" />
            </a>
            <a
              href="wordbeater/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/rjmcbain/JS-wordbeater"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          <div class="item">
            <a
              href="dragndrop/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/projects/dragndrop.png" alt="dragndrop" />
            </a>
            <a
              href="dragndrop/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/rjmcbain/dragndrop"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          <div class="item">
            <a
              href="github-finder/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="img/projects/githubfinder.png" alt="github-finder" />
            </a>
            <a
              href="github-finder/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/rjmcbain/github-finder-JS"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          {/* <!-- <div class="item">
        <a href="#!">
          <img src="" alt=""/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div> --> */}
        </div>
      </main>
    );
  }
}

export default MyWork;
