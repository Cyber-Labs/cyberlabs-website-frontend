import React, {Component} from "react";
import MemberCard from "./Member.Card";
import data from "../../json-files/members.json";
class Member extends Component {
  renderGrid=()=>{
    let i=1;
    let j=[];
    let len=data.length;
    for(i=0;i<len;i++){
      j.push(<MemberCard info={data[i]}/>);
    }
    return j;
  }
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
        <div className="members-grid">
        {this.renderGrid()}
        </div>
        
      </div>
    )
  }
}

export default Member