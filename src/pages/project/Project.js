import React, {Component} from "react";

class Project extends Component {
  render() {
    return (
      <div id='Project'>
        <div className="content" id="ajax-content">
          <div className="text-intro">
            <h1>Projects</h1>
            <p>Check out the following active projects by the Cyber Labs members.</p>
          </div>

          <ul className="portfolio-grid">
            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/projects/sddefault.jpg"/>
              <a className="ajax-link" href="single.html">
                <div className="grid-hover">
                  <h1 className="card-heading">Alice</h1>
                  <p>Reducing the delay due to human intervention for a smoother experience.</p>
                </div>
              </a>
            </li>

            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/projects/smartMirror.jpg"/>
              <a className="ajax-link" href="single-fullscreen.html">
                <div className="grid-hover">
                  <h1 className="card-heading">Smart mirror</h1>
                  <p>A smart mirror and assistant seamlessly displaying pertinent information and helping plan the day while user brushes teeth. Has features as face recognition, efficient and dynamic route planning (with priority stop-points), connected to your phone so that you don't miss updates.</p>
                </div>
              </a>
            </li>

            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/projects/shril_earthquake.png"/>
              <a className="ajax-link" href="single.html">
                <div className="grid-hover">
                  <h1 className="card-heading">EarthQuake mapper</h1>
                  <p>Analytical and disaster management tool. The map shows earthquakes based on a
                    legend, differentiating them on basis of location and severity. The earthquake
                    data is pulled from usgs.gov.in's RSS feed for real time data</p>
                </div>
              </a>
            </li>

            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/projects/digibin.jpg"/>
              <a className="ajax-link" href="single-fullscreen.html">
                <div className="grid-hover">
                  <h1 className="card-heading">DigiBin</h1>
                  <p>A social engagement experiment to study the change in civic sense over time.</p>
                </div>
              </a>
            </li>

            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/thumb_digiboard.png"/>
              <a className="ajax-link" href="#">
                <div className="grid-hover">
                  <h1 className="card-heading">DigiBoard</h1>
                  <p>A concept for user engagement to avoid missing out on bulletin-board notice
                    deadlines.</p>
                </div>
              </a>
            </li>

            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/projects/SH_captions.jpg"/>
              <a className="ajax-link" href="#">
                <div className="grid-hover">
                  <h1 className="card-heading">Smart Handshake</h1>
                  <p>Recreating phonebook experience, smarter exchange of contacts while meeting
                    alongside automating the task.</p>
                </div>
              </a>
            </li>

            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/thumb_buzzlogs.png"/>
              <a className="ajax-link" href="#">
                <div className="grid-hover">
                  <h1 className="card-heading">BuzzLogs</h1>
                  <p>Your assistant for getting things done. Efficiently.</p>
                </div>
              </a>
            </li>

            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/projects/buzzer.JPG"/>
              <a className="ajax-link" href="#">
                <div className="grid-hover">
                  <h1 className="card-heading">Low power remote alerter</h1>
                  <p>An alerting system in events of emergency.</p>
                </div>
              </a>
            </li>
            <li
              className="grid-item"
              data-jkit="[show:delay=3000;speed=500;animation=fade]">
              <img src="assets/img/projects/old_cl.jpg"/>
              <a className="ajax-link" href="#">
                <div className="grid-hover">
                  <h1 className="card-heading">Cyber Labs Member Space</h1>
                  <p>Online platform for Cyber Labs members to interact, maintain a journal and
                    blog their ideas.</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Project