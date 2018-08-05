import React , { Component } from "react";

class Content extends Component {
    render(){
        return (
                <div className="content" id="ajax-content">
                <div className="text-intro" id="site-type">
                  <h1>We are</h1>
                  <h1 className="typewrite">
                    <span>hackers </span>
                  </h1>
                  <p>We create products that solve real problems! Whatever your major is, whatever your age be, whatever you do, doesn't
                    matter!
                  </p>
                  <p>Hop on, if you have that "keeda" of invention.</p>
                  <div>
                    <a href="projects" style={{width:"40%",display:"inline-block"}}>
                      <h3 className="card-heading">See projects ></h3>
                    </a>
                    <a href="logOrSign" style={{width:"40%",display:"inline-block"}}>
                      <h3 className="card-heading">Login or Sign up ></h3>
                    </a>
                  </div>
                </div>
                </div>
        )
    }
}

export default Content;