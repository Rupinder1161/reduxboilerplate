import React, { useState, useEffect } from "react";
import "./filtercomponent.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import redux
import { useSelector, useDispatch } from "react-redux";
import { updateCategory } from "../actions";

function Hello({ food, Icon, updateCate, color}) {
  const [value, setValue] = useState(color);
  console.log(value)
  return (
    <div
      className= {color ?"SLIDERITEM":{backgroundColor:"red"}}
      onClick={() => {
        setValue(!value)
        updateCate(food);
      }}
    >
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
    // setAll(!All)
    dispatch(updateCategory(id));
  };
  const All = true;
  const burger = true;
  const pizza = true;
  const More = true;
  return (
    <div className="sideComponent">
      <Hello
        updateCate={update}
        food="ALL"
        value={All}
        color={ All }
        Icon={EmojiEmotionsOutlinedIcon}
      />
      <Hello
        updateCate={update}
        food="Burger"
        color={burger}
        Icon={FastfoodIcon}
      />
      <Hello
        food="Pizza"
        color={pizza}
        updateCate={update}
        Icon={LocalPizzaIcon}
      />
      <Hello
        food="More"
        color={More}
        updateCate={update}
        Icon={MoreHorizIcon}
      />
    </div>
  );
}

export default Filtercompo;
