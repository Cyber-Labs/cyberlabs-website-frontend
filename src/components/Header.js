import React, { Component } from "react";
import { Link } from "react-router-dom";
import MailToUI from "../../node_modules/mailtoui/dist/mailtoui-min.js";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: false
    };
  }
  componentDidMount() {
    MailToUI.run();
  }

  render() {
    return (
      <div id="Header">
        <header className="boxed" id="header-white">
          <div className="header-margin">
            <div className="logo">
              <img src="assets/img/favico.png" alt="logo" />
              <Link to="/" style={{ paddingLeft: "15px" }}>
                Cyber Labs
              </Link>
            </div>
            <li className="hamberger-menu">
              <a
                href='#/'
                className="icon"
                onClick={() => {
                  this.setState({ responsive: !this.state.responsive });
                }}
              >
                <i className="fa fa-bars" />
              </a>
            </li>
            <ul
              className={
                "header-nav" + (this.state.responsive ? " responsive" : "")
              }
            >
              <li>
                <a className="ajax-link" to="#" href='#/'>
                  People <i className="fa fa-angle-down" />
                </a>
                <ul>
                  <li>
                    <Link
                      onClick={() => {
                        this.setState({ responsive: !this.state.responsive });
                      }}
                      to="members"
                    >
                      Members
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        this.setState({ responsive: !this.state.responsive });
                      }}
                      to="alumni"
                    >
                      Alumni
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        this.setState({ responsive: !this.state.responsive });
                      }}
                      to="management"
                    >
                      Management
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  onClick={() => {
                    this.setState({ responsive: !this.state.responsive });
                  }}
                  to="projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    this.setState({ responsive: !this.state.responsive });
                  }}
                  to="about"
                >
                  About
                </Link>
              </li>
            </ul>
            <ul className="social-icon">
              <div className="social-index">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://thebittheories.com/"
                  >
                    <i className="fa fa-medium" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/labscyber"
                  >
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.github.com/cyber-labs"
                  >
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a className="mailtoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:cyberlabs@iitism.ac.in"
                  >
                    <i className="fa fa-envelope" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
