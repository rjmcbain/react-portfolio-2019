import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <main id="home">
          <h1 className="lg-heading">
            RJ
            <span className="text-secondary">McBain</span>
          </h1>
          <h2 className="sm-heading">
            Full Stack Web Developer & Photographer
          </h2>
          <div className="icons">
            <a
              href="https://github.com/rjmcbain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x" />
            </a>
            <a
              href="https://www.instagram.com/rjmcbain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/rjmcbain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="mailto:rmcbain01@gmail.com">
              <i className="fab fa fa-envelope fa-2x" />
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
