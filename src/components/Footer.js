import React, { Component } from "react";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="div_Footer_One">
          <div className="Icons">
            <p>Contact</p>
            <p>ABOUT</p>
            <p>FAQs</p>
          </div>
          <div className="Icons">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </div>
        <div className="div_Footer_two">
          <p> Jagtari Ltd 2020. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
