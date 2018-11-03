import React, {Component} from "react";
import "../index/Portfolio.css";
import projects from "../../json-files/project.json";

class Project extends Component {
  renderProjects(){
    return projects.map(({name, project, description, links, images}, index)=>{
      return (<div className={"blog-card" + (index%2 === 0 ? " alt":"")}>
      <div className="meta">
        <div className="photo" style={{backgroundSize: "cover", backgroundImage: `url(assets/img/project/${images}), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDENtx4BoVbg1d4yWRFQN9CLuAkev_lsHBOP0T0npWfX_5Vyz)`}} />
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
      <div id="Project">
      {this.renderProjects()}
      </div>
    )
  }
}

export default Project;