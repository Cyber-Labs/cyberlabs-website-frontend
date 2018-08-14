import React, { Component } from "react";
import {Icon} from "react-fa";
import ReactTooltip from "react-tooltip";
import "../views/cyber_mem.css";

class cyber_mem extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:false
    }
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(){
    this.setState({
      visible:!this.state.visible
    });
  }
  
  render() {
    return (
      <div className="App">
          <div className="box effect8">
            <div id="img1"><img src="https://www.w3schools.com/howto/img_avatar.png" width="170px" /></div>
            <div className="head"><h2>Anushka Mittal</h2></div>
            <div className="container ">
            <div className="job"><p>Web Developer</p></div>
            <div className="lang">
            <div className="bubble">PHP</div>
            <div className="bubble">React</div>
            <div className="bubble">Node</div>
            {this.state.visible?<div className="bubble">jquery</div>:null}
            {this.state.visible?<div className="bubble">Node</div>:null}
            {this.state.visible?<div className="bubble">PHP</div>:null}
            <div className="bubble bubble1" onClick={this.handleclick}>{this.state.visible?"-3":"+3"}</div>
            
            </div>
            <div className="icons">
            <div className="icon1" ><a href="https://github.com/anushkamittal/" target="_blank"><Icon name="github" /></a></div>
            <div className="icon1" ><a href="https://www.facebook.com/anushka.mittal.334" target="_blank"><Icon name="eye" /></a></div>
            <div className="icon1" ><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><Icon name="file-text" /></a></div>
            <div className="icon1" ><a href="https://www.linkedin.com/in/anushka-mittal-38a729154/" target="_blank"><Icon name="linkedin-square" /></a></div>
            </div>
            <p> Working at Cyberlabs at IIT(ISM),Dhanbad</p>
            </div>
            <hr width="30%" />
            <div className="profile">PROJECTS</div>
            <div className="pro1">
            <div className="pro" data-tip="Breakout game made using Javascript">B</div>
            <div className="pro" data-tip="A Cryptocurrency ReactNative App">C</div>
            <div className="pro" data-tip="A Drum Machine made using react">D</div>
            <div className="pro" data-tip="A Random-Quote Generator">Q</div>
            </div>
            <ReactTooltip />
          </div>
      </div>
    );
  }
}

export default cyber_mem;
