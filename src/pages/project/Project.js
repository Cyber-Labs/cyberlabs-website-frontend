import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import data from "../../json-files/project.json";
import "./project.css";

class Project extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    renderGrid = () => {
      
      let i = 1;
      let webD = [];
      let androidD = [];
      let ml = [];
      let infoSec = [];
      let hardware = [];
      let graphicD = [];
      let len = data.length;
      for (i = 0; i < len; i++) {
        switch (data[i].team) {
          case "Web Development":
            webD.push(<ProjectCard info={data[i]} />);
            break;
          case "Machine Learning":
            ml.push(<ProjectCard info={data[i]} />);
            break;
          case "Graphic Design":
            graphicD.push(<ProjectCard info={data[i]} />);
            break;
          case "Android":
            androidD.push(<ProjectCard info={data[i]} />);
            break;
          case "Hardware":
            hardware.push(<ProjectCard info={data[i]} />);
            break;
          case "Cyber Security":
            infoSec.push(<ProjectCard info={data[i]} />);
            break;
          default:
        }
      }
      return {
        webD,
        ml,
        graphicD,
        androidD,
        infoSec,
        hardware
      };
    };
    render() {
      return (
        <div id="Project">
          <div className="content" id="ajax-content">
            <div className="text-intro" id="site-type">
              <center>
                <h1>Projects</h1>
              </center>
            </div>
          </div>
          <center>
            <h1>Web Development</h1>
          </center>
          <div className="projects-grid">{this.renderGrid().webD}</div>
          <center>
            <h1>Machine Learing</h1>
          </center>
          <div className="projects-grid">{this.renderGrid().ml}</div>
          <center>
            <h1>Android</h1>
          </center>
          <div className="projects-grid">{this.renderGrid().androidD}</div>
          <center>
            <h1>Graphic Design</h1>
          </center>
          <div className="projects-grid">{this.renderGrid().graphicD}</div>
          <center>
            <h1>Hardware</h1>
          </center>
          <div className="projects-grid">{this.renderGrid().hardware}</div>
          {/* <center>
            <h1>Cyber Security</h1>
          </center>
         <div className="projects-grid">{this.renderGrid().infoSec}</div> */}
        </div>
      );
    }
  }
  
  export default Project;