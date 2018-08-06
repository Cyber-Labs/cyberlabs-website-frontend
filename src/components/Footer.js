import React, {Component} from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer-box">
        <div className="footer-margin">
          <div className="copyright" id="footer-left">© Copyright 2016 cyberlabs.club. All Rights Reserved.</div>
        </div>
        <p
          className="developer-details"
          style={{
          textAlign: "right",
          width: "95%"
        }}>Developed by
          <a href="http://mohitchawla.in/">eM</a>
          |
          <a href="https://www.facebook.com/kriti96.singh">Kay</a>
        </p>
      </footer>
    )
  }
}

export default Footer;