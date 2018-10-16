import React, { Component } from "react";
import "./member2.css";


class MemberCard extends Component {

  render() {
    return (
      <div className="box1 effect81">
      <div id="img1"><img src="https://www.w3schools.com/howto/img_avatar.png" alt="" width="170px" /></div>
      <div className="head1">
          {/* <div>name here</div> */}
      </div>
      <div className="container1 ">
          <div className="job1">
              {/* <p>pic field here</p> */}
          </div>
          <div className="icons1">
              <div className="icon1"><a href="https://github.com/anushkamittal/" target="_blank"><i class="fa fa-github"
                          aria-hidden="true"></i></a></div>
              <div className="icon1"><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i class="fa fa-linkedin-square"
                          aria-hidden="true"></i></a></div>
              <div className="icon1"><a href="https://www.linkedin.com/in/anushka-mittal-38a729154/" target="_blank"><i class="fa fa-file-text"
                          aria-hidden="true"></i></a></div>
          </div>
          <div className="lang1">
              {/* {pic.lang.map(element =>
              <div className="bubble2">languages here</div>
              )} */}
          </div>
          <p> Working at Cyberlabs at IIT(ISM),Dhanbad</p>
      </div>
      <hr width="30%" />
      <div className="profile1">PROJECTS</div>
      <div className="pro1">
          <div className="pro2">B</div>
          <div className="pro2">C</div>
          <div className="pro2">D</div>
          <div className="pro2">Q</div>
      </div>
      </div>
    );
  }
}

export default MemberCard;