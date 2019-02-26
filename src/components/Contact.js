import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <main id="contact">
          <h1 className="lg-heading">
            Contact
            <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">This is how you can reach me...</h2>
          <div className="boxes">
            <div>
              <span className="text-secondary">Resume:</span>
              <a href="resume.html">Download</a>
            </div>
            <div>
              <span className="text-secondary">Location:</span>
              <a
                href="https://www.google.com/maps/place/Denver,+CO+80205/@39.7616892,-104.986385,14z/data=!3m1!4b1!4m5!3m4!1s0x876c793e750e3927:0xc2e2a56dc91360bb!8m2!3d39.7558119!4d-104.9680914?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Denver, CO 80205{" "}
              </a>
            </div>
            <div>
              <span className="text-secondary">Email:</span>
              <a href="mailto:rmcbain01@gmail.com">rmcbain01@gmail.com</a>
            </div>

            {/* <!-- <div>
        <span className="text-secondary">Phone:</span> (702) 688-2747
      </div> --> */}

            <div>
              <span className="text-secondary">Linkedin:</span>
              <a
                href="https://www.linkedin.com/in/rjmcbain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.linkedin.com/in/rjmcbain/
              </a>
            </div>
            <div>
              <span className="text-secondary">Instagram:</span>
              <a
                href="https://www.instagram.com/rjmcbain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.instagram.com/rjmcbain/
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Contact;
