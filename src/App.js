import React, { Component } from "react";
import Header from "./components/Header";
import Footer from './components/Footer';
import Index from './module/index/components/Index';
import Member from './module/member/components/Member';
import Management from './module/people/components/Management';
import Project from './module/project/components/Project'
import Advisors from './module/people/components/Advisors';
import Puzzle from './module/events/components/Puzzle';
import About from './module/about/components/About';
import Contact from './module/contact/components/Contact';
import Publication from './module/publication/components/Publication';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Index/>
        <Member />
        <Management />
        <Advisors />
        <Project />
        <Puzzle />
        <About />
        <Contact />
        <Publication />
        <Footer />
      </div>
    );
  }
}

export default App;
