import React, { Component } from "react";
import Content from "./Content";
import Portfolio from "./Portfolio";

class Index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div id="Index">
        <Content />
        <Portfolio />
      </div>
    );
  }
}

export default Index;
