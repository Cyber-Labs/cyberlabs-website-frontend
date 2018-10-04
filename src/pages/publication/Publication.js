import React, {Component} from "react" ;

class Publication extends Component {
    render(){
        return (
            <div id='Publication'>
                <div className="content" id="ajax-content">
                <div className="text-intro">
                  <h1>Publications</h1><br />
                  <h3>Research papers:</h3>
                  <div className="paper">
                    <div className="paper-title"><h5>A Comparison of Data-Exchange Mechanisms for Real-time Communication</h5> </div>
                    <div className="paper-subtitle">Mohit Chawla, Kriti Singh, Siba Mishra, Chiranjeev Kumar</div>
                    <div className="paper-created-at-relative"> International Journal of Rough Sets and Data Analysis <br />
                      (Special Issue on High Performance Computing and its Applications) </div>
                  </div>
                  <h3>The Bit Theories:</h3>
                  <a href="https://thebittheories.com/" target="_blank" rel="noopener noreferrer"><div id="posts-header" style={{width: "50%", height: "auto"}}>
                  <img src="assets/img/tbt_pic.png" /></div></a>
                  <p>Learn esoteric Computer Science concepts via short articles under 3-minute reads on the go!</p>
                  <p>Be it programming, hardware, software, data science or algorithms, our members tinker in their projects and let you know the must-haves to save your time!</p>
                  <p>Follow <a href="https://thebittheories.com/" target="_blank" rel="noopener noreferrer">us here</a> to learn via the Bit Theories.</p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br />      
                    </div>
                </div>
        )
    }
}

export default Publication;