import React, {Component} from 'react';

class Advisors extends Component {
    render(){
        return (
            <div id="Advisors">
                <div className="content" id="ajax-content">
                    <div className="text-intro" id="site-type">
                        <center><h1>Advisors</h1></center>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" style={{marginBottom: "50px"}}>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <img src="assets/img/joe_paradiso.png" height="230" className="mx-auto center-block circular-img" style={{borderRadius: "50%"}} />
                                <center>
                                  <h4 className="person-name">Joe Paradiso</h4>  
                                   <h6 className="person-position">Associate Professor, Media Arts and Sciences<br />MIT Media Lab</h6>
                                </center>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <img src="assets/img/alexis_hope.jpg" height="230" className="mx-auto center-block circular-img" style={{borderRadius: "50%"}} />
                                <center>
                                  <h4 className="person-name">Alexis Hope</h4>  
                                 <h6 className="person-position">Designer and Researcher<br />MIT Media Lab</h6>
                                </center>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <img src="assets/img/anirudh_sharma.jpg" height="230" className="mx-auto center-block circular-img" style={{borderRadius: "50%"}} />
                                <center>
                                  <h4 className="person-name">Anirudh Sharma</h4>  
                                   <h6 className="person-position">MIT Media Lab</h6>
                                </center>
                            </div>   
                        </div>
                    </div>
                </div>
                <div className="content" id="ajax-content">
                    <div className="text-intro" id="site-type">
                        <center><h1>Alumunai</h1></center>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" style={{marginBottom: "50px"}}>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <img src="assets/img/rahulPaul.jpg" height="230" className="mx-auto center-block circular-img" style={{borderRadius: "50%"}} />
                                <center>
                                  <h4 className="person-name">Rahul Paul</h4>  
                                   <h6 className="person-position">University of South Florida</h6>
                                </center>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <img src="assets/img/mohitPun.jpg" height="230" className="mx-auto center-block circular-img" style={{borderRadius: "50%"}} />
                                <center>
                                  <h4 className="person-name">Mohit Punjabi</h4>  
                                 <h6 className="person-position">Amazon, India</h6>
                                </center>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advisors