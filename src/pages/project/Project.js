import React, { Component } from "react";
import projects from "../../json-files/project.json";
import "./project.css";

class Project extends Component {
  renderProjects() {
    return projects.map(
      ({ name, description, images, links, project }, index) => {
        return (
          <div className="box effect82">
            <div className="columns">
              <div className="column1">
                <img
                  src={
                    images
                      ? `assets/img/project/${images}`
                      : "assets/img/project-placeholder.png"
                  }
                  style={{
                    borderRadius: "0",
                    margin: "0",
                    width: images ? "100%" : "50%"
                  }}
                  width="100%"
                  height="270px"
                  alt="Name of project"
                />
              </div>
              <div className="column-2">
                <div className="name">
                  <h1>{project}</h1>
                </div>
                <div className="about" />
                <hr width="50%" color="orange" />
                <div className="url">
                  <div className="icon1">
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <i class="fa fa-github" aria-hidden="true" />
                      </div>{" "}
                    </a>
                  </div>
                </div>
                <div className="Description">
                  <p>{description}</p>
                </div>
                <div className="madeby">
                  <div className="by1 effect83">
                    <i
                      class="fa fa-user"
                      aria-hidden="true"
                      style={{ padding: "5px" }}
                    />
                    {name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  }
  render() {
    return <div className="App2">{this.renderProjects()}</div>;
  }
}
export default Project;
