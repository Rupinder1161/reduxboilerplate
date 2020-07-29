import React, { Component } from "react";

import "./header.css";

const g = [{ header: "Jagtari", url: "/" }];

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <button class="first">J</button>
        <button class="second">A</button>
        <button class="third">G</button>
        <button class="fourth">T</button>
        <button class="five">A</button>
        <button class="six">R</button>
        <button class="seven">I</button>
        {/* <h2 className="logo">Jag<span className="spanText">T</span>ari</h2> */}
        {/* <button onClick={this.data}> {this.data()}</button> */}
      </div>
    );
  }
}

export default Header;
