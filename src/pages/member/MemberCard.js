import React, { Component } from "react";
import "./member-card/member-card.css";
import ProgressiveImage from "react-progressive-image";

class MemberCard extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="member-card">
        {info.img ? (
          <ProgressiveImage
            className="member-profile-img"
            src={`/assets/img/memberProfile/${info.img}`}
            placeholder={"/assets/img/default-profile-icon.jpg"}
          >
            {(src, loading) => (
              <img
                src={src}
                alt="member"
                height="250"
                width="200"
                style={{
                  borderRadius: "10px",
                  margin: "auto",
                  boxShadow: "0 1px 18px -4px #888888",
                  objectFit: "cover",
                  objectPosition: "50% 20%",
                  filter: loading ? "blur(8px)" : "blur(0)"
                }}
              />
            )}
          </ProgressiveImage>
        ) : (
          <img
            src="/assets/img/default-profile-icon.jpg"
            alt="member"
            height="250"
            width="200"
            style={{
              borderRadius: "10px",
              margin: "auto",
              boxShadow: "0 1px 18px -4px #888888",
              objectFit: "cover",
              objectPosition: "50% 20%"
            }}
          />
        )}
        <h2 className="member-name">{info.name}</h2>
        <div className="member-details">
          <ul className="member-social-links">
            {info.email && (
              <li className="member-social-icon">
                <a href={"mailto:" + info.email}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </li>
            )}
            {info.links.github && (
              <li className="member-social-icon">
                <a
                  href={info.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
            )}
            {info.links.linkedin && (
              <li className="member-social-icon">
                <a
                  href={info.links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </li>
            )}
            {info.links.website && (
              <li className="member-social-icon">
                <a
                  href={info.links.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                </a>
              </li>
            )}
            {info.links.others && (
              <li className="member-social-icon">
                <a
                  href={info.links.others}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-file-text" aria-hidden="true" />
                </a>
              </li>
            )}
            {info.links.medium && (
              <li className="member-social-icon">
                <a
                  href={info.links.medium}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-medium" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
          <div className="lang1" />
          <p className="member-about">{info.about}</p>
        </div>
        <hr width="30%" />
      </div>
    );
  }
}

export default MemberCard;
