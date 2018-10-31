import React, {Component} from "react";
import {Link} from "react-router-dom"
class Header extends Component {
  constructor(props){
    super(props);
    this.state= {
      responsive: false,
    };
  }

  render() {
    return (
      <div id='Header'>
        <header className="boxed" id="header-white">
          <div className="header-margin">
            {/* <span><i class="fa fa-bars"></i></span> */}
            <div className="logo">
              <img src="assets/img/favico.png" alt="logo"/>
              <Link to="/" style={{paddingLeft: "15px"}}>Cyber Labs</Link>
            </div>
            <li className="hamberger-menu">
                  <a className="icon" onClick={()=>{this.setState({responsive: !this.state.responsive})}}>
                    <i className="fa fa-bars"></i>
                  </a>
            </li>
            <ul className={"header-nav" + (this.state.responsive ? " responsive":"")}>
              <li>
                <a className="ajax-link" to="#">People <i className="fa fa-angle-down"></i></a>
                <ul>
                  <li>
                    <Link onClick={()=>{this.setState({responsive: !this.state.responsive})}} to="members">Members</Link>
                  </li>
                  <li>
                    <Link onClick={()=>{this.setState({responsive: !this.state.responsive})}} to="advisors">Advisors</Link>
                  </li>
                  <li>
                    <Link onClick={()=>{this.setState({responsive: !this.state.responsive})}} to="management">Management</Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                <Link to="comingSoon">Blog</Link>
              </li> */}
              {/* blog */}
              {/* <li>
                <a className="ajax-link" style={{cursor: "pointer"}}>Events <i className="fa fa-angle-down"></i> </a>
                <ul>
                  <li>
                    <Link to="comingSoon">[.dotMatrix]</Link>
                  </li>
                  <li>
                    <Link to="comingSoon">Events</Link>
                  </li>
                  <li>
                    <Link to="comingSoon">Downloads</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link onClick={()=>{this.setState({responsive: !this.state.responsive})}} to="about">About</Link>
              </li>
              <li>
                <Link onClick={()=>{this.setState({responsive: !this.state.responsive})}} to="contact">Contact</Link>
              </li>
              {/* Apart */}
              {/* <li className="pull-right"><a href="comingSoon" style={{color:#111;">Calendar</a></li> */}
              {/* <li className="pull-right" style={{float:"right"}}>
                <a href="comingSoon" style={{color:"#111",}}>Publications</a>
              </li> */}
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