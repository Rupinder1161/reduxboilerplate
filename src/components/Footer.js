import React, { Component } from "react";
import "./footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
export class Footer extends Component {
  render() {
    return (
     
      <div className="footer">

        <div className="div_Footer_One">
        <text>Contact</text>
        <text>ABOUT</text>
          <text>FAQs</text>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon/>
        </div>
        <div className="div_Footer_two">
        <text> Jagtari Ltd 2020. All rights reserved.</text>
        </div>
      </div>
    );
  }
}

export default Footer;
