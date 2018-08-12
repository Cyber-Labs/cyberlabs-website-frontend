import React, {Component} from "react";
import {advisors, alumunai} from "../views/advisorField";
class Advisors extends Component {
  renderFields(item){
    return item.map(({name, img, position, place})=>{
            return  (<div className="grid-responsive">
                <img
                  src={`assets/img/${img}`}
                  alt="img"
                  height="230"
                  style={{
                  borderRadius: "50%"
                }}/>
                <center>
                  <h4 className="person-name">{name}</h4>
                  <h6 className="person-position">{position}<br/>{place}</h6>
                </center>
              </div>)
    })
  }
  render() {
    return (
      <div id="Advisors">
        <div className="content" id="ajax-content">
          <div className="text-intro" id="site-type">
            <center>
              <h1>Advisors</h1>
            </center>
          </div>
        </div>
        <div className="container">
            <div className="portfolio-grid">
              {this.renderFields(advisors)}
            </div>  
        </div>
        <div className="content" id="ajax-content">
          <div className="text-intro" id="site-type">
            <center>
              <h1>Alumni</h1>
            </center>
          </div>
        </div>
        <div className="container">
            <div className="portfolio-grid">
              {this.renderFields(alumunai)}
            </div>
        </div>
      </div>
    )
  }
}

export default Advisors