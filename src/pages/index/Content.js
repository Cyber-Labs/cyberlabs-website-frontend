import React , { Component } from "react";
import Typewriter from "./Typewriter"
class Content extends Component {
    render(){
        return (
            <div className="content" id="ajax-content">
              <div className="text-intro" id="site-type">
                <Typewriter />
                <p>We create products that solve real problems! Whatever your major is, whatever your age be, whatever you do, doesn't
                  matter!
                </p>
                <p>Hop on, if you have that "keeda" of invention.</p>
                <div>
                  <a className="indexLinks" href="projects" style={{width:"40%"}}>
                    <h3 className="card-heading">See projects ></h3>
                  </a>
                </div>
              </div>
            </div>
        )
    }
}

export default Content;