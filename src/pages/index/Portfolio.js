import React, {Component} from "react";
import "./Portfolio.css";
import projects from "../../json-files/frontPageProject.json";

class Portfolio extends Component {
  renderProjects(){
    return projects.map(({name, project, description, links, images}, index)=>{
      return (<div className={"blog-card" + (index%2 === 0 ? " alt":"")}>
      <div className="meta">
        <div className="photo" style={{backgroundImage: `url(assets/img/project/${images}), url(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg`}} />
        <ul className="details">
          <li className="author">{name}</li>          
        </ul>
      </div>
      <div className="description">
        <h1>{project}</h1>
        <p>{description}</p>
        <h1 className="icons-font">
          <a href={`${links.github}`} ><i className="fab icons-font-padding fa fa-github fa-3px" style={{float: "right"}} /></a>
        </h1>    
      </div>
    </div>)
    })
  }
  render() {
    return (
      <div id="Portfolio">
      {this.renderProjects()}
      </div>
    )
  }
}

export default Portfolio;