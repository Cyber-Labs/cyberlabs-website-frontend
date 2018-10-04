import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./module/index/Index";
import Member from "./module/member/Member";
import Management from "./module/people/Management";
import Project from "./module/project/Project"
import Advisors from "./module/people/Advisors";
import Puzzle from "./module/events/Puzzle";
import About from "./module/about/About";
import Contact from "./module/contact/Contact";
import Publication from "./module/publication/Publication";
import ComingSoon from "./module/comingSoon/ComingSoon";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Index} />
            <Route exact path="/members" component={Member} />
            <Route exact path="/management" component={Management} />
            <Route exact path="/advisors" component={Advisors} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/about" component={About} />
            <Route exact path="/puzzle" component={Puzzle} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/publication" component={Publication} />
            <Route exact path="/comingSoon" component={ComingSoon} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
