import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./middle.css";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Cart from "./Cart";
import FloatFooter from "./FloatFooter";
import Product from "./Product"

//import hooks & redux
import { useSelector, useDispatch } from "react-redux";
import { increment, updateCart } from "../actions";

const CardA = (props) => (
  <Card style={{ backgroundColor: "#F5F5DC" }}>
    <CardHeader
      avatar={
        <Avatar
          aria-label="recipe"
          variant="rounded"
          style={{ backgroundColor: "green", padding: "2px", color: "#fff" }}
        >
          ${props.data}
        </Avatar>
      }
      action={<IconButton aria-label="settings"> </IconButton>}
      title={props.foodName + " from " + props.venueName}
      subheader="September 14, 2016"
    />
    <CardMedia title="Paella dish">
      <img className="img-responsive" alt="hello" src={props.picLink} />
    </CardMedia>
    <CardContent>
      {" "}
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
    <Link to={"/product/" + props.id} ><Button
      variant="contained"
      style={{ width: "100%" }}
      color="secondary"
      onClick={() => {
        props.updateCart(props.id);
      }}
    >
      Order Now{" "}
    </Button></Link>
  </Card>
);

const loadingdata = [
  { name: "Loading..." },
  { name: "loading..." },
  { name: "loading..." },
  { name: "loading..." },
  { name: "loading..." },
  { name: "loading..." },
  { name: "loading..." },
];
function Slidera(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const cart = useSelector((state) => state.cart);
  const [carty, setCarty] = useState();

  const addToCartTest = (id) => {
    const h = state.filter((e) => e._id === id);
    dispatch(updateCart(h));
    setCarty(h);
  };

  const Price = props.Price;
  const fullData = state;
  const Cart = cart;
  return (
    <div className="mainDivMiddle">
      {fullData.length == 0
        ? loadingdata.map((e) => (
            <div className="middleDataDiv">
              {e.name}
              <Skeleton width="100%" /> <Skeleton width="80%" height="20vh" />{" "}
              <Skeleton width="100%" /> <Skeleton width="100%" />{" "}
              <Skeleton width="100%" /> <Skeleton width="100%" variant="text" />
            </div>
          ))
        : fullData.map((e) =>
            e.Price <= Price ? (
              <div className="middleDataDiv">
                <CardA
                  data={e.Price}
                  id={e._id}
                  venueName={e.VenueName}
                  picLink={e.Piclink}
                  foodName={e.FoodName}
                  id = {e._id}
                  updateCart={addToCartTest}
                  price={Price}
                >
                  e.Price
                </CardA>
              </div>
            ) : Price == 0 || Price == null ? (
              <div className="middleDataDiv">
                <CardA
                  data={e.Price}
                  venueName={e.VenueName}
                  id={e._id}
                  updateCart={addToCartTest}
                  picLink={e.Piclink}
                  foodName={e.FoodName}
                  price={Price}
                />
              </div>
            ) : (
              ""
            )
          )}

      {Cart.length === 0 ? (
        <div className="Footerdata" style={{ display: "none" }}>
          {" "}
          <FloatFooter badgeData={state} />
        </div>
      ) : (
        <div className="Footerdata">
          {" "}
          <FloatFooter badgeData={cart} />
        </div>
      )}
    </div>
  );
}

export default Slidera;
