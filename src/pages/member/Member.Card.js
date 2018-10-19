import React, { Component } from "react";
import "./member-card/member-card.css";


class MemberCard extends Component {

  render() {
		return (
			<div className="member-card">
				<img className="member-profile-img" src="https://www.inbenta.com/wp-content/themes/inbenta/img/icons/avatar.svg?ver=2" alt="" width="170px" />
				<h2 className="member-name">Name Here</h2>
				<div className="member-details">
					{/* <div className="job1">
						<p>pic field here</p>
					</div> */}
					<ul className="member-social-links">
						<li className="member-social-icon"><a href="https://github.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"
									aria-hidden="true"></i></a></li>
						<li className="member-social-icon"><a href="https://linkedin.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square"
									aria-hidden="true"></i></a></li>
						<li className="member-social-icon"><a href="https://www.link.com/" rel="noopener noreferrer" target="_blank"><i
									className="fa fa-file-text" aria-hidden="true"></i></a></li>
					</ul>
					<div className="lang1">
						{/* languages here */}
					</div>
					<p className="member-about"> Working at Cyberlabs at IIT(ISM),Dhanbad</p>
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