import React, {Component} from "react";
import {Link} from "react-router-dom"
class Header extends Component {
  render() {
    return (
      <div id='Header'>
        <header className="boxed" id="header-white">
          <div className="header-margin">
            {/* <span><i class="fa fa-bars"></i></span> */}
            <div className="logo">
              <img src="assets/img/favico.png" width="60px" height="60px" style={{float:"left", paddingTop:"10px"}} />
              <Link to="/" style={{paddingLeft: "15px"}}>Cyber Labs</Link>
            </div>
            <ul className="header-nav">
              <li>
                <Link className="ajax-link" to="#">People <i className="fa fa-angle-down"></i></Link>
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
              {/* <li>
                <Link to="comingSoon">Blog</Link>
              </li> */}
              {/* blog */}
              <li>
                <a className="ajax-link" style={{cursor: "pointer"}}>Events <i className="fa fa-angle-down"></i> </a>
                <ul>
                  <li>
                    <Link to="comingSoon">[.dotMatrix]</Link>
                  </li>
                  {/* <li>
                    <Link to="comingSoon">Events</Link>
                  </li> */}
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
                <a href="comingSoon" style={{color:"#111",}}>Publications</a>
              </li>
            </ul>
            <ul className="social-icon">
              <div className="social-index">
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/labscyber">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/cyber-labs">
                    <i className="fa fa-github"></i>
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