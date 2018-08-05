import React, {Component} from 'react';

class Portfolio extends Component {
    render(){
        return (
            <div id='Portfolio'>
                {/*!-- PORTFOLIO GRID -->*/}
                <ul className="portfolio-grid" id="portfolio-sidebar">
                    <li className="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
                      <img src="assets/img/website_dotmatrix.png" />
                      <a className="ajax-link" href="comingSoon">
                        <div className="grid-hover">
                          <p className="card-heading">The Observers' Quiz: [.dotMatrix]</p>
                          <p>ISMites gear up for the test of their attention on 26th January, after the fancy puzzle posted on the event page
                            made everyone scartch their heads.</p>
                        </div>
                      </a>
                    </li>
                    <li className="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
                      <img src="assets/img/coming_soon_disc.png" />
                      <a className="ajax-link" href="comingSoon">
                        <div className="grid-hover">
                          <p className="card-heading">Cyber Labs' Screen</p>
                          <p>Amusing humans with ONE more perspective they missed out upon, the movie series is up to fire-up the love game
                            with technology and scientific thinking.</p>
                        </div>
                      </a>
                    </li>
                    <li className="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
                      <img src="assets/img/thumb_buzzlogs.png" />
                      <a className="ajax-link" href="comingSoon">
                        <div className="grid-hover">
                          <p className="card-heading">BuzzLogs</p>
                          <p>Get things done, together.</p>
                        </div>
                      </a>
                    </li>
                    <li className="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
                      <img src="assets/img/clSession9Jan.jpg"/>
                      <a className="ajax-link" href="comingSoon">
                        <div className="grid-hover">
                          <p className="card-heading">Demo or Die: 9th January 2015</p>
                          <p>Demo time for the members- from engaging dustbins, remote alerting systems to basic portal framework: members
                            cross V1 of what was incepted.</p>
                        </div>
                      </a>
                    </li>
                    <li className="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
                      <img src="assets/img/thumb_digiboard.png"/>
                      <a className="ajax-link" href="comingSoon">
                        <div className="grid-hover">
                          <p className="card-heading">DigiBoard: Never miss another notice deadline</p>
                          <p>The digiBoard is the concept to an engaging notice board engaging with simple intuitive colors.</p>
                        </div>
                      </a>
                    </li>
                    <li className="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
                      <img src="assets/img/large/mohit.png"/>
                      <a className="ajax-link" href="comingSoon">
                        <div className="grid-hover">
                          <p className="card-heading">"It was THE confluence of designers, innovators and techies!"</p>
                          <p>Founder, Cyber Labs shares his experience at the MIT Media Lab DI Workshop.</p>
                        </div>
                      </a>
                    </li>
                    <li className="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
                      <img src="assets/img/thumb_SH.png"/>
                      <a className="ajax-link" href="comingSoon">
                        <div className="grid-hover">
                          <p className="card-heading">Smart Handshake</p>
                          <p>A smarter concept of exchanging contacts while, uh, simply a handshake!</p>
                        </div>
                      </a>
                    </li>
                    <li className="grid-item" data-jkit="[show:delay=3000;speed=500;animation=fade]">
                      <img src="assets/img/work1.JPG"/>
                      <a className="ajax-link" href="comingSoon">
                        <div className="grid-hover">
                          <p className="card-heading">Hard-wire in action</p>
                          <p>Tinkering up LED displays and seven segment displays whipped up from scratch.</p>
                        </div>
                      </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Portfolio;