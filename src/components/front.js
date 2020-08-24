import React from "react";

import "./header.css";
import Foodlist from "./Foodlist";

function Front(props) {
  return (
    <div >
      <Foodlist IntialData={props.IntialData} />
      
    </div>
  );
}

export default Front;
