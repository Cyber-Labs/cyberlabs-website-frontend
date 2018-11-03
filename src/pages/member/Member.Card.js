import React, { Component } from "react";
import "./member-card/member-card.css";
import ProgressiveImage from "react-progressive-image"

class MemberCard extends Component {
	constructor(props){
		super(props);
		this.state={
			img:"https://www.inbenta.com/wp-content/themes/inbenta/img/icons/avatar.svg?ver=2"
		};
	}

  render() {
		return (
			<div className="member-card">	
				<ProgressiveImage className="member-profile-img" src={`/assets/img/memberProfile/${this.props.info.img}`}  placeholder={this.state.img}  >
                  {src => <img src={src} alt="member" 
                    height="250" width="200"
                    style={{
					borderRadius: "30px",
					margin: "auto",
					boxShadow: "0 1px 18px -4px #888888",
					objectFit: "cover",
					objectPosition: "50% 20%"
                  }}/>}
                </ProgressiveImage>
				<h2 className="member-name">{this.props.info.name}</h2>
				<div className="member-details">
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
						{this.props.info.links.others &&
							<li className="member-social-icon"><a href={this.props.info.links.others} rel="noopener noreferrer" target="_blank"><i
							className="fa fa-file-text" aria-hidden="true"></i></a></li>
						}
						{this.props.info.links.medium &&
							<li className="member-social-icon"><a href={this.props.info.links.medium} rel="noopener noreferrer" target="_blank"><i
							className="fa-medium" aria-hidden="true"></i></a></li>
						}
						
					</ul>
					<div className="lang1">
					</div>
					<p className="member-about"> {this.props.info.about}</p>
				</div>
				<hr width="30%" />
			</div>
		);
  }
}

export default MemberCard;