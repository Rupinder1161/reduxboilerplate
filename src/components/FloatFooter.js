import React, { Component } from "react";
import "./footer.css";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Button from "@material-ui/core/Button";

//router and redux import
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//table
const Table = (props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
      flexFlow: "column wrap",
      alignItems: "center",
    }}
  >
    <table>
      <caption>Order Summary</caption>
      <thead>
        <tr>
          <th scope="col">Food Name</th>
          <th scope="col">Venue Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        {props.propData.map((e) => (
          <tr key={e._id}>
            <td data-label="Food Name">
              <span style={{ marginLeft: "10px" }}>{e.FoodName}</span>
            </td>
            <td data-label="Venue Name">{e.VenueName}</td>
            <td data-label="Amount">{e.Price}</td>
            <td data-label="Quantity">1</td>
          </tr>
        ))}
      </tbody>
    </table>

    <Typography> Total :{props.dataPrice}</Typography>
    <Link to={"/Cart/"}>
      {" "}
      <Button
        variant="contained"
        style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
        color="primary"
      >
        Proceed to Checkout
      </Button>
    </Link>
  </div>
);
//table

function FloatFooter() {
  const h = useSelector((state) => state.cart);
  const hh = h.map((e) => e[0]);
  const dataPrice = hh.map((e) => e.Price).reduce((a, b) => a + b, 0);
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div className="floatfooter">
          <div className="floatfooter" {...bindTrigger(popupState)}>
            <Badge
              className="cool"
              badgeContent={hh.length}
              color="secondary"
              showZero
            >
              <ShoppingCartIcon />
            </Badge>
          </div>

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Box>
              <Table dataPrice={dataPrice} total={dataPrice} propData={hh} />
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default FloatFooter;
