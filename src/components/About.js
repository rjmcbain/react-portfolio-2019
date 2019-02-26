import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <main id="about">
          <h1 className="lg-heading">
            About
            <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">Let me tell you a few things...</h2>
          <div className="about-info">
            <img src="img/Me-11.jpg" alt="Me" className="bio-image" />

            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                I am a Full Stack Web Developer based out of Denver, CO. I am
                currently working on a mobile app called Spinnr, it is a React
                Native project that I am building with another devoloper. When I
                am not working on programming you can find me out in nature
                camping, hiking and taking photos.
              </p>
            </div>
            <div className="job job-1">
              <h3>Cairnstack Software</h3>
              <h6>Trxio</h6>
              <p>
                In 2018 I joined a 4 person team to help maintain software that
                helped businesses with inventory management. My role was to come
                up with new features as well as design and create new features
                for existing clients at their request. I mainly worked in
                Javascript, MySql and some Php.
              </p>
            </div>
            <div className="job job-2">
              <h3>Spinnr.</h3>
              <h6>React Native</h6>
              <p>
                Spinnr is a mobile app built using React Native. The app allows
                a user to take a photo of a record cover and have it
                automatically play in Spotify. Currently we are getting close to
                marketing our product before we launch our Kickstarter. You can
                learn more at
                <a
                  href="http://www.spinnrapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.spinnrapp.com
                </a>
              </p>
            </div>
            <div className="job job-3">
              <h3>General Assembly</h3>
              <h6>Student</h6>
              <p>
                In 2017 I attended a 3 month coding boot camp at General
                Assembly. I studied Javascript and frameworks like Angular and
                React. I also built many web apps using those framworks along
                with Node.js, Mongo Databases and Firebase. Since graduating I
                have kept busy improving my skills and learning new ones. I plan
                on continuing my education by learning php and python in the
                near future
              </p>
            </div>
            {/* <!-- <div className="job job-3">
              <h3>Resume</h3>
              <h6>More Information</h6>
              <p>You can learn more by downloading my resume.
                <a id="resume" href="resume.html" />Download
                <i className="fab fa fa-download fa-1x"></i>
                </a>
              </p>
            </div> --> */}
            {/* </div> */}
          </div>
        </main>
      </div>
    );
  }
}

export default About;
