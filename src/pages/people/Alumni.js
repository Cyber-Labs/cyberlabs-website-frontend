import React, { Component } from "react";
import alumni from "./../../json-files/alumni.json";
import "./Alumni.css";
import ProgressiveImage from "react-progressive-image";
class Alumni extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Cyber Labs | Alumni";
    document.querySelector("meta[name='keywords']").content =
      "Alumni, Cyber Labs, cyberlabs alumni,ism alumni,cyber labs alumni";
    document.querySelector("meta[name='description']").content =
      "Cyber Labs Alumni";
  }

  renderFields(input) {
    return alumni.map(
      ({ name, img, position, place, opImg, yearOfGrad, links }) => {
        if (yearOfGrad === input) {
          return (
            <div>
              <a href={links ? links.linkedin : "#"}>
                <div className="grid-responsive">
                  <ProgressiveImage
                    src={"/assets/img/alumni/" + img}
                    placeholder={"/assets/img/default-profile-icon.jpg"}
                  >
                    {(src, loading) => (
                      <img
                        src={src}
                        alt="alumni"
                        height="230"
                        width="250px"
                        style={{
                          filter: loading ? "blur(8px)" : "blur(0)",
                          objectFit: "cover"
                        }}
                      />
                    )}
                  </ProgressiveImage>
                  <center>
                    <h4 className="person-name">{name}</h4>
                    <h6 className="person-position">
                      {position}
                      <br />
                      {place}
                    </h6>
                  </center>
                </div>
              </a>
            </div>
          );
        } else {
          return null;
        }
      }
    );
  }

  render() {
    return (
      <div id="Alumni">
        <div className="content" id="ajax-content">
          <div className="text-intro" id="site-type">
            <center>
              <h1>Alumni</h1>
            </center>
          </div>
        </div>
        <div className="container">
          <center>
            <h1>2016</h1>
          </center>
          <div className="portfolio-grid">{this.renderFields("2016")}</div>
          <center>
            <h1>2017</h1>
          </center>
          <div className="portfolio-grid">{this.renderFields("2017")}</div>
          <center>
            <h1>2018</h1>
          </center>
          <div className="portfolio-grid">{this.renderFields("2018")}</div>
          <center>
            <h1>2019</h1>
          </center>
          <div className="portfolio-grid">{this.renderFields("2019")}</div>
          <center>
            <h1>2020</h1>
          </center>
          <div className="portfolio-grid">{this.renderFields("2020")}</div>
        </div>
      </div>
    );
  }
}

export default Alumni;
