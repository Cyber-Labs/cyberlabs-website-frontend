import React, {Component} from "react";
class ComingSoon extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div id="ComingSoon">
        <div className="content" id="ajax-content">
          <div style={{marginBottom: "50vh"}} className="text-intro" id="site-type">
            <center>
              <h1>Coming Soon!</h1>
            </center>
          </div>
        </div>        
      </div>
    )
  }
}

export default ComingSoon