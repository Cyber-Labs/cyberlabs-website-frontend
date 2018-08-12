import React, {Component} from "react";
import "../views/card.css"

class Portfolio extends Component {
  render() {
    return (
      <div id="Portfolio">
        <div className="blog-card">
          <div className="meta">
            <div className="photo" style={{backgroundImage: "url(http://cyberlabs.club/img/manoj_display.jpg)"}} />
            <ul className="details">
              <li className="author"><a href="#">Jane Doe</a></li>
              <li className="date">July. 15, 2015</li>           
            </ul>
          </div>
          <div className="description">
            <h1>Mastering the Language</h1>
            <h2>
              <div style={{marginLeft: 23, display: "inline-block", marginTop: "-27px"}}>
                <span className="button-tags">HTML</span>
                <span className="button-tags">JavaScript</span>
                <span className="button-tags">React</span>
                <span className="button-tags">Typescript</span>             
              </div>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
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
            <div className="photo" style={{backgroundImage: "url(http://cyberlabs.club/projects/digibin.jpg)"}} />
            <ul className="details">
              <li className="author"><a href="#">Jane Doe</a></li>
              <li className="date">July. 15, 2015</li>           
            </ul>
          </div>
          <div className="description">
            <h1>Mastering the Language</h1>
            <h2>
              <div style={{marginLeft: 23, display: "inline-block", marginTop: "-27px"}}>
                <span className="button-tags">HTML</span>
                <span className="button-tags">JavaScript</span>
                <span className="button-tags">React</span>
                <span className="button-tags">Typescript</span>             
              </div>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
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