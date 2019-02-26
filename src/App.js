import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/work" component={MyWork} />
              <Route exact path="/about" component={About} />
              <Route exact path="/admin" component={Admin} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
          <Footer year={new Date().getFullYear()} />
          {/* <Home />
          <About />
          <MyWork />
          <Contact /> */}
        </div>
      </Router>
    );
  }
}

export default App;
