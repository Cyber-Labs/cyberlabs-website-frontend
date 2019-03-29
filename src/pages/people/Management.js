import React, { Component } from "react";
import management from "../../json-files/management.json";

class Management extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title="Cyber Labs|Management";
    document.querySelector("meta[name='keywords']").content="Management, Cyber Labs, cyberlabs management,ism management,cyber labs management";
  }
  renderFields(item) {
    return item.map(({ name, img, position, place }) => {
      return (
        <div className="grid-responsive">
          <img
            src={`/assets/img/management/${img}`}
            alt="img"
            height="230"
            style={{
              // borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "50% 20%"
            }}
          />
          <center>
            <h4 className="person-name">{name}</h4>
            <h6 className="person-position">
              {position}
              <br />
              {place}
            </h6>
          </center>
        </div>
      );
    });
  }
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
          <div className="portfolio-grid">{this.renderFields(management)}</div>
        </div>
      </div>
    );
  }
}

export default Management;
