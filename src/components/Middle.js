import React, { Component } from "react";
import "./middle.css";
import Slidera from "./Slider";
import Filtercompo from "./Filtercompo"
export class Middle extends Component {
  render() {
    return (
      <div className="middlesection">
        <Filtercompo />
        <Slidera Price={this.props.Price} />     
      </div>
    );
  }
}

export default Middle;
