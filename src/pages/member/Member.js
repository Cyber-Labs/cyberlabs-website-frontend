import React, { Component } from "react";
import MemberCard from "./Member.Card";
import data from "../../json-files/members.json";
class Member extends Component {
  renderGrid = () => {
    data.sort((a, b) => {
      return a.yearOfPassing - b.yearOfPassing;
    });
    let i = 1;
    let webD = [];
    let androidD = [];
    let ml = [];
    let infoSec = [];
    let hardware = [];
    let graphicD = [];
    let coder = [];
    let len = data.length;
    for (i = 0; i < len; i++) {
      switch (data[i].team) {
        case "Web Development":
          webD.push(<MemberCard info={data[i]} />);
          break;
        case "Machine Learning":
          ml.push(<MemberCard info={data[i]} />);
          break;
        case "Graphic Designing":
          graphicD.push(<MemberCard info={data[i]} />);
          break;
        case "Android":
          androidD.push(<MemberCard info={data[i]} />);
          break;
        case "Hardware":
          hardware.push(<MemberCard info={data[i]} />);
          break;
        case "Cyber Security":
          infoSec.push(<MemberCard info={data[i]} />);
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
      hardware,
      coder
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
        <center>
          <h1>Web Development</h1>
        </center>
        <div className="members-grid">{this.renderGrid().webD}</div>
        <center>
          <h1>Machine Learing</h1>
        </center>
        <div className="members-grid">{this.renderGrid().ml}</div>
        <center>
          <h1>Android</h1>
        </center>
        <div className="members-grid">{this.renderGrid().androidD}</div>
        <center>
          <h1>Graphics Design</h1>
        </center>
        <div className="members-grid">{this.renderGrid().graphicD}</div>
        <center>
          <h1>Hardware</h1>
        </center>
        <div className="members-grid">{this.renderGrid().hardware}</div>
        <center>
          <h1>Cyber Security</h1>
        </center>
        <div className="members-grid">{this.renderGrid().infoSec}</div>
      </div>
    );
  }
}

export default Member;
