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
                          objectFit: "cover",
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
        <div className="divisions">
          <ul>
            <li>
              <a className="hover-effect" href="#2022">
                2022
              </a>
            </li>
            <li>
              <a className="hover-effect" href="#2023">
                2023
              </a>
            </li>
            <li>
              <a className="hover-effect" href="#2024">
                2024
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <center id="2022">
            <h1>2022</h1>
          </center>
          <div className="portfolio-grid">{this.renderFields("2022")}</div>
          <center id="2023">
            <h1>2023</h1>
          </center>
          <div className="portfolio-grid">{this.renderFields("2023")}</div>
          <center id="2024">
            <h1>2024</h1>
          </center>
          <div className="portfolio-grid">{this.renderFields("2024")}</div>
        </div>
      </div>
    );
  }
}

export default Alumni;
