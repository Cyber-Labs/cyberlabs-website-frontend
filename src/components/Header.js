import React, {Component} from "react";
import {Link} from "react-router-dom"
class Header extends Component {
  render() {
    return (
      <div id='Header'>
        <header className="boxed" id="header-white">
          <div className="header-margin">
            <div className="logo">
              <img src="assets/img/favico.png" width="60px" height="60px" style={{float:"left", paddingTop:"10px"}} />
              <Link to="/" style={{paddingLeft: "15px"}}>Cyber Labs</Link>
            </div>
            <ul className="header-nav">
              <li>
                <Link className="ajax-link" to="#">People</Link>
                <ul>
                  <li>
                    <Link to="members">Members</Link>
                  </li>
                  <li>
                    <Link to="advisors">Advisors</Link>
                  </li>
                  {/* had className="ajax-link" */}
                  <li>
                    <Link to="management">Management</Link>
                  </li>
                  {/* had className="ajax-link" */}
                </ul>
              </li>
              <li>
                <Link to="comingSoon">Blog</Link>
              </li>
              {/* blog */}
              <li>
                <a to="">Events</a>
                <ul>
                  <li>
                    <Link to="comingSoon">[.dotMatrix]</Link>
                  </li>
                  <li>
                    <Link to="comingSoon">Sessions</Link>
                  </li>
                  <li>
                    <Link to="comingSoon">Downloads</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              {/* Apart */}
              {/* <li className="pull-right"><a href="comingSoon" style={{color:#111;">Calendar</a></li> */}
              <li className="pull-right" style={{float:"right"}}>
                <a href="comingSoon" style={{color:"#111",}}>Newsletter</a>
              </li>
            </ul>
            <ul className="social-icon">
              <div className="social-index">
                <li>
                  <a href="https://www.facebook.com/labscyber">
                    <i className="fa fa-facebook">f</i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/madepossibleincyberlabs/">
                    <i className="fa fa-instagram">t</i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;