import React, { Component } from "react";
import MemberCard from "./MemberCard";
import data from "../../json-files/members.json";
class Member extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Cyber Labs | Members";
    document.querySelector("meta[name='keywords']").content = "Alumni, Cyber Labs, cyberlabs members,ism alumni,cyber labs member";
    document.querySelector("meta[name='description']").content = "Cyber Labs Members";
  }
  renderGrid = () => {
    data.sort((a, b) => {
      return a.yearOfPassing - b.yearOfPassing;
    });
    let i = 1;
    let webD = [];
    let androidD = [];
    let ml = [];
    let infoSec = [];
    let graphicD = [];
    let blockchain = [];
    let len = data.length;
    for (i = 0; i < len; i++) {
      switch (data[i].team) {
        case "Web Development":
          webD.push(<MemberCard info={data[i]} />);
          break;
        case "Machine Learning":
          ml.push(<MemberCard info={data[i]} />);
          break;
        case "Graphic Design":
          graphicD.push(<MemberCard info={data[i]} />);
          break;
        case "Android":
          androidD.push(<MemberCard info={data[i]} />);
          break;
        case "Cyber Security":
          infoSec.push(<MemberCard info={data[i]} />);
          break;
        case "Blockchain":
          blockchain.push(<MemberCard info={data[i]} />);
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
      blockchain
    };
  };
  render() {
    return (
      <div id="Member">
        <div className="content" id="ajax-content">
          <div className="text-intro" id="site-type">
            <center>
              <h1>Members</h1>
            </center>
          </div>
        </div>
        <div className="divisions">
          <ul>
            <li>
              <a className="hover-effect" href="#web-development">Web Development</a>
            </li>
            <li>
              <a className="hover-effect" href="#machine-learning">Machine Learning</a>
            </li>
            <li>
              <a className="hover-effect" href="#android">Android</a>
            </li>
            <li>
              <a className="hover-effect" href="#graphic-design">Graphic Design</a>
            </li>
            <li>
              <a className="hover-effect" href="#cyber-security">Cyber Security</a>
            </li>
            <li>
              <a className="hover-effect" href="#blockchain">Blockchain</a>
            </li>
          </ul>
        </div>
        <center id="web-development">
          <h1>Web Development</h1>
        </center>
        <div className="members-grid">{this.renderGrid().webD}</div>
        <center id="machine-learning">
          <h1>Machine Learning</h1>
        </center>
        <div className="members-grid">{this.renderGrid().ml}</div>
        <center id="android">
          <h1>Android</h1>
        </center>
        <div className="members-grid">{this.renderGrid().androidD}</div>
        <center id="graphic-design">
          <h1>Graphic Design</h1>
        </center>
        <div className="members-grid">{this.renderGrid().graphicD}</div>
        <center id="cyber-security">
          <h1>Cyber Security</h1>
        </center>
        <div className="members-grid">{this.renderGrid().infoSec}</div>
        <center id="blockchain">
          <h1>Blockchain</h1>
        </center>
        <div className="members-grid">{this.renderGrid().blockchain}</div>
      </div>
    );
  }
}

export default Member;
