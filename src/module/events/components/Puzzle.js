import React, {Component} from "react";

class Puzzle extends Component {
    render(){
        return (
            <div className="content" id="ajax-content">
            <div className="text-intro">
              <h1>[.dotMatrix]</h1>
              <div className="one-column">
                <p>The devil is in the details.</p>
              </div>
              <div className="two-column">
                <p>[.dotMatrix] is an event by Cyber Labs where teams are quizzed on topics ranging from significant buzz from the cyberspace and common computer science and day-to-day entities’ attributes. 
                  The kind of questions that make you feel guilty and think, "Damn! I see that everyday, how could i miss this!?"</p>
                <p>Register in teams of 3 (each member from different academic year) <a href="https://cyberlabsism.typeform.com/to/WQyLDV">here</a>.
                  Feel free to Contact the hosts for any issues pertaining to teams and other.</p>
              </div> 
              <div className="clear" />            
              
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                  {/* <h3 style="line-height:1.5em"><span style="font-weight:400">Prizes sponsored by: </span><br> Jhajharia Computers,<span style="font-weight:400">&nbsp;Bank More. </span> </h3>
                               <h4> <a href="http://www.jhajhariacomputers.com" target="_blank">www.jhajhariacomputers.com</a> </h4>  
                               <br> */}
                  <h3 style={{width: '100%'}}>Prizes proudly sponsored by:</h3>
                  <h5 style={{margin: '0 10px', fontWeight: 600, fontSize: 30}}>Jhajharia Computers, Bank More</h5>
                  <h4> <a href="http://www.jhajhariacomputers.com" target="_blank">www.jhajhariacomputers.com</a> </h4>  
                </div>
                               <div className="col-sm-5 col-sm-offset-1">
                  <div id="fb-root" className=" fb_reset">
                    <div style={{position: 'absolute', top: '-10000px', height: 0, width: 0}}>
                      <div>
                        <iframe name="fb_xdm_frame_http" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" id="fb_xdm_frame_http" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabIndex={-1} src="http://staticxx.facebook.com/connect/xd_arbiter/r/QX17B8fU-Vm.js?version=42#channel=f3e15936b8c46f8&origin=http%3A%2F%2Fcyberlabs.club" style={{border: 'none'}} /><iframe name="fb_xdm_frame_https" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabIndex={-1} src="https://staticxx.facebook.com/connect/xd_arbiter/r/QX17B8fU-Vm.js?version=42#channel=f3e15936b8c46f8&origin=http%3A%2F%2Fcyberlabs.club" style={{border: 'none'}} />
                      </div>
                    </div>
                    <div style={{position: 'absolute', top: '-10000px', height: 0, width: 0}}>
                      <div />
                    </div>
                  </div>
                  <div className="fb-post fb_iframe_widget" data-href="https://www.facebook.com/labscyber/posts/767371000035403" data-width={500} fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&container_width=458&href=https%3A%2F%2Fwww.facebook.com%2Flabscyber%2Fposts%2F767371000035403&locale=en_US&sdk=joey&width=500">
                    <span style={{verticalAlign: 'bottom', width: 458, height: 480}}>
                      <iframe name="f10af88da856b8" width="500px" height="1000px" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" title="fb:post Facebook Social Plugin" src="https://www.facebook.com/v2.3/plugins/post.php?app_id=&channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FQX17B8fU-Vm.js%3Fversion%3D42%23cb%3Df250bfbbec52ecc%26domain%3Dcyberlabs.club%26origin%3Dhttp%253A%252F%252Fcyberlabs.club%252Ff3e15936b8c46f8%26relation%3Dparent.parent&container_width=458&href=https%3A%2F%2Fwww.facebook.com%2Flabscyber%2Fposts%2F767371000035403&locale=en_US&sdk=joey&width=500" style={{border: 'none', visibility: 'visible', width: 458, height: 480}} className>
                      </iframe>
                    </span>
                  </div>
                </div>
                <div style={{marginTop: ''}}>
                  <img className="img-responsive img-center" src="assets/img/website_dotmatrix.png" />
                </div>
                
              </div>
              <div className="row">
                <div className="col-xs-12">  
                  <h1>PUZZLE DAY 1:</h1>
                  <p style={{width: '100%'}}>With a lot of participation and heavy response from the audience, we are pround to announce the the list of people who successfully solved the puzzle along with their reporting times:
                  </p>
                  <div className="col-md-5">
                    <p style={{width: '100%'}}>
                      <span style={{fontWeight: 500, color: '#444'}}>Correctly Answered by:</span>{/* </b> */}
                      Shubham Chauhan@12:29am, <b>WINNER</b>  
                      Naman Taneja@1:16am 
                      Deepak Bhagat@1:32am 
                      Vipul Grover@1:33am 
                      Urvish Desai@1:43am 
                      Abdur Rehman Danish@2:16am 
                    </p>
                  </div>
                  <div className="col-md-7">
                    <p style={{fontWeight: 500, color: '#444', width: '100%'}}>Puzzle:</p>{/* </b> */}
                    <p style={{width: '100%'}}>The latest Hitman is severly injured while stopping an attack on a city "X" (of the country of the synth programmer of The Dark Knight) in the latest season of a TV series he made appearance.
                      The owneR Of endofliNe is also known as "Y". "Z" is the assasin created by the writer of a book having it's name same as half of the name of a book by the Laboratory Director of "S" + "Research" + "T"; "T" is home to Cantab and "S" made a funny clippy. "Z Y" 'CHANGED' the entire world. "Z Y", born in "X", designed the following awesome things: Y[0]+'1', Y[0]+'2', Y[0]+'3', Y[0]+'4', Y[0]+'5', Y[0]+'11', Y[0]+'22'. "A" was the most significant among all of them. What is "Z" + "Y" + "X" + "A"?</p>
                  </div>
                  <div className="col-md-12">
                    <p style={{width: '100%'}}>
                      <span style={{fontWeight: 500, color: '#444', width: '100%'}}>Solution:</span> Konrad Zuse berlin z3
                    </p>
                  </div>
                </div>
                <div className="col-xs-12">  
                  <h1>PUZZLE DAY 2:</h1>
                  <p style={{width: '100%'}}>With a lot of struggle this time though participants managed to reach the answer, we are pround to announce the the list of people who successfully solved the puzzle along with their reporting times:
                  </p>
                  <div className="col-md-5">
                    <p style={{width: '100%'}}>
                      <span style={{fontWeight: 500, color: '#444'}}>Correctly Answered by:</span>{/* </b> */}
                      Abdur Rehman Danish@02:17 pm, <b>WINNER</b>  
                      Ankit Agrawal@02:54pm 
                    </p>
                  </div>
                  <div className="col-md-7">
                    <p style={{fontWeight: 500, color: '#444', width: '100%'}}>Puzzle:</p>{/* </b> */}
                    <p style={{width: '100%'}}>Get a Ford. Go to the southern hemisphere. Turn into a bird. Don't fly, you'll die. Stop it! Now find LoudGas. Do you prefer qwerty or azerty? Hail him. Do you prefer to use it alone? Use that too. That was made when LoudGas reacted while singing to release me in the last waltz. Name the reaction.</p>
                  </div>
                  <div className="col-md-12">
                    <p style={{width: '100%'}}>
                      <span style={{fontWeight: 500, color: '#444', width: '100%'}}>Solution:</span> Douglas Engelbart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                )
            }
        }

export default Puzzle