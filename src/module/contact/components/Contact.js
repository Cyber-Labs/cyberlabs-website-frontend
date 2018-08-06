import React, {Component} from "react";

class Contact extends Component {
  render() {
    return (
      <div id='Contact'>
        <div className="content" id="ajax-content">
          <div className="text-intro">
            <h1>Contact</h1>
            <p>Please reach out to us on
              <a
                href="https://www.facebook.com/labscyber"
                style={{
                fontSize: 20,
                color: "black"
              }}><i className="fab fa-facebook"/></a>
              Facebook
              <br/>or drop a mail at cyberlabs.ism@gmail.com</p>
            {/*           <form name = "filepost" method = "POST" action = "file.php" enctype = "multipart/form-data" id = "file">
                   Name: <input name = "from" type = "text" id = "from" size = "30">
                   Age: <input name = "emaila"  type = "text" id = "emaila" size = "30">
                   <input name = "filea" type = "file" id = "filea" size = "16">
                    <input name = "Reset2" type = "reset" id = "Reset2" value = "Reset">
                    <input name = "Submit2" type = "submit" value = "Submit" onClick = "return CheckData45()">

                </form> */}
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    )
  }
}

export default Contact