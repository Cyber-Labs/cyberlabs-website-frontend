import React, {Component} from "react";

class Management extends Component {
  render() {
    return (
      <div id="Management">
        <div className="content" id="ajax-content">
          <div className="text-intro" id="site-type">
            <center>
              <h1>Management</h1>
            </center>
          </div>
        </div>
        <div className="container">
          <div className="portfolio-grid">
            <div className="grid-img">
              <img
                src="assets/img/kalyan_sir.jpg"
                height="230"
                className="mx-auto center-block circular-img"
                alt= ""
                style={{
                borderRadius: "50%"
              }}/>
              <center>
                <h4 className="person-name">Prof. Kalyan Chatterjee</h4>
                <h6 className="person-position">President</h6>
              </center>
            </div>
            <div className="grid-img">
              <img
                src="assets/img/large/mohit.png"
                height="230"
                className="mx-auto center-block circular-img"
                alt =""
                style={{
                borderRadius: "50%"
              }}/>
              <center>
                <h4 className="person-name">Mohit Chawla</h4>
                <h6 className="person-position">Founder</h6>
              </center>
            </div>
            <div className="grid-img">
              <img
                src="assets/img/soni.jpg"
                alt=""
                height="230"
                className="mx-auto center-block circular-img"
                style={{
                borderRadius: "50%"
              }}/>
              <center>
                <h4 className="person-name">Subham Kumar Soni</h4>
                <h6 className="person-position">Secretary</h6>
              </center>
            </div>
          </div>
          {/* <div
            className=""
            style={{
            marginBottom: "50px"
          }}>
            <div className="col-lg-12  col-md-12 col-sm-12 col-xs-12">
              <img
                src="assets/img/large/prabodhS.jpg"
                height="230"
                className="mx-auto center-block circular-img"
                style={{
                borderRadius: "50%"
              }}/>
              <center>
                <h4 className="person-name">Prabodh Tripathi</h4>
                <h6 className="person-position">Joint Secretary</h6>
              </center>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Management