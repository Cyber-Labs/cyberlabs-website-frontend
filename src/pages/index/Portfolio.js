import React, {Component} from "react";
import "./Portfolio.css"

class Portfolio extends Component {
  render() {
    return (
      <div id="Portfolio">
      <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: "url(assets/img/projects/smartMirror.jpg)"}} />
            <ul className="details">
              <li className="author"><a href="#">Jane Doe</a></li>
              <li className="date">July. 15, 2015</li>           
            </ul>
          </div>
          <div className="description">
            <h1>Smart mirror</h1>
            <p>A smart mirror and assistant seamlessly displaying pertinent information and helping plan the day while user brushes teeth. Has features as face recognition, efficient and dynamic route planning (with priority stop-points), connected to your phone so that you don't miss updates.</p>
            <h1 className="icons-font">
              <i className="icons-font-padding fa fa-eye fa-2px" />
              <i className="icons-font-padding fa fa-github fa-2px" />
              <i className="icons-font-padding fa fa-twitter fa-2px" />
            </h1>
            <div className="fab"><i className="fa fa-arrow-up fa-2x" /></div>
          </div>
        </div>
      <div className="blog-card alt">
          <div className="meta">
            <div className="photo" style={{backgroundImage: "url(assets/img/projects/shril_earthquake.png)"}} />
            <ul className="details">
              <li className="author"><a href="#">Jane Doe</a></li>
              <li className="date">July. 15, 2015</li>           
            </ul>
          </div>
          <div className="description">
            <h1>Earthquake Mapper</h1>
            <p>Analytical and disaster management tool. The map shows earthquakes based on a
                    legend, differentiating them on basis of location and severity. The earthquake
                    data is pulled from usgs.gov.in's RSS feed for real time data</p>
            <h1 className="icons-font">
              <i className="icons-font-padding fa fa-eye fa-2px" />
              <i className="icons-font-padding fa fa-github fa-2px" />
              <i className="icons-font-padding fa fa-twitter fa-2px" />
            </h1>
            <div className="fab"><i className="fa fa-arrow-up fa-2x" /></div>
          </div>
        </div>
        
        <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: "url(assets/img/projects/digibin.jpg)"}} />
            <ul className="details">
              <li className="author"><a href="#">Jane Doe</a></li>
              <li className="date">July. 15, 2015</li>           
            </ul>
          </div>
          <div className="description">
            <h1>DigiBin</h1>
            <p>A social engagement experiment to study the change in civic sense over time.</p>
            <h1 className="icons-font">
              <i className="icons-font-padding fa fa-eye fa-2px" />
              <i className="icons-font-padding fa fa-github fa-2px" />
              <i className="icons-font-padding fa fa-twitter fa-2px" />
            </h1>
            <div className="fab"><i className="fa fa-arrow-up fa-2x" /></div>
          </div>
        </div>
        
        
        <div className="blog-card alt">
          <div className="meta">
            <div className="photo" style={{backgroundImage: "url(assets/img/projects/SH_captions.jpg)"}} />
            <ul className="details">
              <li className="author"><a href="#">Jane Doe</a></li>
              <li className="date">July. 15, 2015</li>           
            </ul>
          </div>
          <div className="description">
            <h1>Smart Handshake</h1>
            <p>Recreating phonebook experience, smarter exchange of contacts while meeting
                    alongside automating the task.</p>
            <h1 className="icons-font">
              <i className="icons-font-padding fa fa-eye fa-2px" />
              <i className="icons-font-padding fa fa-github fa-2px" />
              <i className="icons-font-padding fa fa-twitter fa-2px" />
            </h1>
            <div className="fab"><i className="fa fa-arrow-up fa-2x" /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;