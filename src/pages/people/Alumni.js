import React, { Component } from "react";
import alumni from "./../../json-files/alumni.json";
import ProgressiveImage from "react-progressive-image";
class Alumni extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title="Cyber Labs|Alumni";
  }
  renderFields(input) {
    return alumni.map(({ name, img, position, place, opImg ,year,link}) => {
      if(year===input){
        return (
          <div>
          <a href={link}>
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
                    borderRadius: "10px",
                    objectFit: "cover",
                    objectPosition: "50% 20%",
                    filter: loading ? "blur(8px)" : "blur(0)"
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
      }
      else{
        return null;
      }
    });
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
        </div>
      </div>
    );
  }
}

export default Alumni;
