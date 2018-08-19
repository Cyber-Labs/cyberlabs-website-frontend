import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./module/index/components/Index";
import cyber_mem from "./module/member/components/cyber_mem";
import Management from "./module/people/components/Management";
import Project from "./module/index/components/Project";
import Projects from './module/project/components/p1';
import Advisors from "./module/people/components/Advisors";
import Puzzle from "./module/events/components/Puzzle";
import About from "./module/about/components/About";
import Contact from "./module/contact/components/Contact";
import Publication from "./module/publication/components/Publication";
import ComingSoon from "./module/comingSoon/components/ComingSoon";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Index} />
            <Route exact path="/cyber_mem" component={cyber_mem} />
            <Route exact path="/management" component={Management} />
            <Route exact path="/advisors" component={Advisors} />
            <Route exact path="/project" component={Project} />
            <Route exact path='/projects' component={Projects}/>
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
