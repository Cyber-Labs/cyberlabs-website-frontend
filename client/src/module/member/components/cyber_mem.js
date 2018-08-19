import React, { Component } from "react";
import {Icon} from "react-fa";
import ReactTooltip from "react-tooltip";
import "../views/cyber_mem.css";

class cyber_mem extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:false,
      name:''
    }
  }

  componentDidMount(){
   
    fetch('/api/hello')
    .then(results =>{
      return results.json();
    }).then(data => {
      let name = data.map((pic)=>{
        return (
          <div className="box effect8">
          <div id="img1"><img src="https://www.w3schools.com/howto/img_avatar.png" width="170px" /></div>
          <div className="head"><h1>{pic.name}</h1></div>
          <div className="container ">
          <div className="job"><p>{pic.feild}</p></div>
          <div className="icons">
          <div className="icon1" ><a href="https://github.com/anushkamittal/" target="_blank"><Icon name="github" /></a></div>
          <div className="icon1" ><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><Icon name="file-text" /></a></div>
          <div className="icon1" ><a href="https://www.linkedin.com/in/anushka-mittal-38a729154/" target="_blank"><Icon name="linkedin-square" /></a></div>
          </div>
          <div className="lang">
      <div className="bubble">PHP</div>
          <div className="bubble">React</div>
          <div className="bubble">Node</div>
          <div className="bubble bubble1" data-tip data-for='global' >+3</div>
          <ReactTooltip id='global' className='tool' effect='solid' place='bottom'>
      <ul>
        <li>ReactNative</li>
        <li>reactjs</li>
        <li>Node</li>
      </ul>
      </ReactTooltip>
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
       
        )
      })
      this.setState({name:name});
      console.log("state",this.state.name);
    })
  }

  render() {
    return (
      <div className="App">
         {this.state.name}
          </div>
    );
  }
}

export default cyber_mem;
