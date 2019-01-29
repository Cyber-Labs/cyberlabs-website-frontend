import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./pages/index/Index";
import Member from "./pages/member/Member";
import Management from "./pages/people/Management";
import Project from "./pages/project/Project";
import Alumni from "./pages/people/Alumni";
import About from "./pages/about/About";
import Publication from "./pages/publication/Publication";
import ComingSoon from "./pages/comingSoon/ComingSoon";

import "./App.css";

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Index} />
            <Route exact path="/members" component={Member} />
            <Route exact path="/management" component={Management} />
            <Route exact path="/alumni" component={Alumni} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/about" component={About} />
            <Route exact path="/publication" component={Publication} />
            <Route exact path="/comingSoon" component={ComingSoon} />
            <Footer key={window.location.pathname} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
