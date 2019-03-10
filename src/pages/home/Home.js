import React, { Component } from "react";
import HomeContent from "./HomeContent";
import HomeProjects from "./HomeProjects";

class Index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="Index">
        <HomeContent />
        <HomeProjects />
      </div>
    );
  }
}

export default Index;
