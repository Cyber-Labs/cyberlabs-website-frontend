import React, {Component} from "react";

class Contact extends Component {
  render() {
    return (
      <div id='Contact' style={{marginBottom: "40vh"}}>
        <div className="content" id="ajax-content">
          <div className="text-intro">
            <h1>Contact</h1>
            <p>Please reach out to us on
              <a
                href="https://www.facebook.com/labscyber"
                style={{
                fontSize: 20,
                color: "black"
              }}> <i className="fa fa-facebook"/> </a>
              Facebook
              <br/>or drop a mail at: <br /> <a style={{color: "black"}} href="mailto:cyberlabs@iitism.ac.in"><i style={{marginRight: "10px"}} className="fa fa-envelope fa-2x"/> cyberlabs@iitism.ac.in</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact