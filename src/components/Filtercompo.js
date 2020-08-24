import React, { useState, useEffect } from "react";
import "./filtercomponent.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import redux
import { useSelector, useDispatch } from "react-redux";
import { updateCategory } from "../actions";

function Hello({ food, Icon,updateCate }) {
  return (
      <div className="SLIDERITEM" onClick={() => {
          console.log("dfgffd")
          updateCate(food)
    }}>
      <Icon />
      <h2 style={{ fontWeight: 800, fontSize: "20px", paddingLeft: "20px" }}>
        {food}
      </h2>
    </div>
  );
}

function Filtercompo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartgories);

    const update = (id) => {
        dispatch(updateCategory(id))
    }
  return (
    <div className="sideComponent">
      <Hello
        updateCate={update}
        food="Burger"
        Icon={FastfoodIcon}
      />
      <Hello food="Pizza" updateCate={update} Icon={LocalPizzaIcon} />
      <Hello food="More"  updateCate={update} Icon={MoreHorizIcon} />
    </div>
  );
}

export default Filtercompo;
