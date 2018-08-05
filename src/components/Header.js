import React, {Component} from 'react';
class Header extends Component {
  render() {
    return (
      <div id='Header'>
        <header className="boxed" id="header-white">
          <div className="header-margin">
            <div className="logo">
              <img src="assets/img/favico.png" width="60px" height="60px" style={{float:"left", paddingTop:"10px"}} />
              <a href="index" style={{paddingLeft: "15px"}}>Cyber Labs</a>
            </div>
            <ul className="header-nav">
              <li>
                <a className="ajax-link" href="#">People</a>
                <ul>
                  <li>
                    <a href="members">Members</a>
                  </li>
                  <li>
                    <a href="advisors">Advisors</a>
                  </li>
                  {/* had className="ajax-link" */}
                  <li>
                    <a href="management">Management</a>
                  </li>
                  {/* had className="ajax-link" */}
                </ul>
              </li>
              <li>
                <a href="comingSoon">Blog</a>
              </li>
              {/* blog */}
              <li>
                <a href="Events">Events</a>
                <ul>
                  <li>
                    <a href="dotmatrix">[.dotMatrix]</a>
                  </li>
                  <li>
                    <a href="comingSoon">Sessions</a>
                  </li>
                  <li>
                    <a href="comingSoon">Downloads</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="contact">Contact</a>
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
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/madepossibleincyberlabs/">
                    <i className="fa fa-instagram"></i>
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