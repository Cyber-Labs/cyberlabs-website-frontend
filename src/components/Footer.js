import React, {Component} from "react";

class Footer extends Component {
  constructor(props){
    super(props);
    this.state= {
      windonHref: "gdfg"
    };
  }
  componentWillMount(){
    this.setState({
      windowHref: window.location.href.substr(window.location.href.length-7, 7)
    })
  }
  render() {
    return (
      <footer id="footer-box" style={{marginTop: (this.state.windowHref === "contact"? " 25vh": "75px")}}>
        <div className="footer-margin">
          <div className="copyright" id="footer-left">© Copyright 2018 cyberlabs.club. All Rights Reserved.</div>
        </div>
      </footer>
    )
  }
}

export default Footer;