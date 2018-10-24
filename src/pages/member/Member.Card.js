import React, { Component } from "react";
import "./member-card/member-card.css";


class MemberCard extends Component {
	// constructor(props){
	// 	super(props);
	// 	this.state={
			
	// 	};
	// }
	// dataFilter(){
	// 	let data=this.props.info;

	// 	// return Object.keys(data);
	// }
  render() {

		return (
			<div className="member-card">
				<img className="member-profile-img" src="https://www.inbenta.com/wp-content/themes/inbenta/img/icons/avatar.svg?ver=2" alt="" width="170px" />
				<h2 className="member-name">{this.props.info.name}</h2>
				<div className="member-details">
					{/* <div className="job1">
						<p>pic field here</p>
					</div> */}
					<ul className="member-social-links">
						{this.props.info.email &&
							<li className="member-social-icon"><a href={this.props.info.email} rel="noopener noreferrer" target="_blank"><i className="fa fa-at"
							aria-hidden="true"></i></a></li>
						}
						{this.props.info.links.github &&
							<li className="member-social-icon"><a href={this.props.info.links.github} rel="noopener noreferrer" target="_blank"><i className="fa fa-github"
							aria-hidden="true"></i></a></li>
						}
						{this.props.info.links.linkedin &&
							<li className="member-social-icon"><a href={this.props.info.links.linkedin} rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square"
							aria-hidden="true"></i></a></li>
						}
						{this.props.info.links.resume &&
							<li className="member-social-icon"><a href={this.props.info.links.resume} rel="noopener noreferrer" target="_blank"><i
							className="fa fa-file-text" aria-hidden="true"></i></a></li>
						}
						{this.props.info.links.medium &&
							<li className="member-social-icon"><a href={this.props.info.links.medium} rel="noopener noreferrer" target="_blank"><i
							className="fa-medium" aria-hidden="true"></i></a></li>
						}
						
					</ul>
					<div className="lang1">
						{/* languages here */}
					</div>
					<p className="member-about"> {this.props.info.about}</p>
				</div>
				<hr width="30%" />
				<div className="member-projects-title">PROJECTS</div>
				<div className="member-projects">
					<div className="member-project-icon">B</div>
					<div className="member-project-icon">C</div>
					<div className="member-project-icon">D</div>
					<div className="member-project-icon">Q</div>
				</div>
			</div>
		);
  }
}

export default MemberCard;