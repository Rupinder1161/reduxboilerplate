import React, { Component, useState, useEffect } from "react";
import "./footer.css";
import "./cart.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Payment from "./Payment";

//inmport actions
import { updateTotalPrice } from "../actions";

function Table(props) {
  return (
    <div>
      <table
        style={{
          width: "90%",
          marginTop: "5%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <thead style={{ marginTop: "100px" }}>
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
              <td data-label="Quantity" >
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  placeholder="1"
                  max="5"
                 style={{marginRight:"10px"}}
              ></input>
                x ${e.Price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Typography> Total :{props.dataPrice}</Typography> */}

      <div className="subtotal cf">
        <Typography> Total :{props.dataPrice}</Typography>
        <ul>
          <li className="totalRow">
            <span className="label">Subtotal</span>
            <span className="value">${props.dataPrice}.00</span>
          </li>

          <li className="totalRow">
            <span className="label">Shipping</span>
            <span className="value">${props.shipping}.00</span>
          </li>

          <li className="totalRow">
            <span className="label">Tax</span>
            <span className="value">${props.tax}.00</span>
          </li>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">
              ${props.dataPrice + props.tax + props.shipping}.00
            </span>
          </li>
          <li className="totalRow">
            <a
              href="#"
              onClick={() => {
                updateTotalPrice(20);
              }}
              className="btn continue"
            >
              Proceed for Payment
            </a>
            {/* <button onClick={updateTotalPrice(20)} > test</button> */}
          </li>
        </ul>
      </div>
      <div>
        {/* payment system */}
        {/* <Payment fullData={props.propData} /> */}
      </div>
    </div>
  );
}

// const Table = (props) => (
//   <div>
//     <table
//       style={{
//         width: "90%",
//         marginTop: "5%",
//         marginLeft: "5%",
//         marginRight: "5%"
//       }}
//     >
//       <thead style={{ marginTop: "100px" }}>
//         <tr>
//           <th scope="col">Food Name</th>
//           <th scope="col">Venue Name</th>
//           <th scope="col">Amount</th>
//           <th scope="col">Quantity</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.propData.map((e) => (
//           <tr key={e._id}>
//             <td data-label="Food Name">
//               <span style={{ marginLeft: "10px" }}>{e.FoodName}</span>
//             </td>
//             <td data-label="Venue Name">{e.VenueName}</td>
//             <td data-label="Amount">{e.Price}</td>
//             <td data-label="Quantity">
//               <input
//                 type="text"
//                 style={{ width: "10px", padding: "5px", marginRight: "10px" }}
//                 placeholder="3"
//               />
//               x ${e.Price}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>

//     {/* <Typography> Total :{props.dataPrice}</Typography> */}

//     <div className="subtotal cf">
//       <Typography> Total :{props.dataPrice}</Typography>
//       <ul>
//         <li className="totalRow">
//           <span className="label">Subtotal</span>
//           <span className="value">${props.dataPrice}.00</span>
//         </li>

//         <li className="totalRow">
//           <span className="label">Shipping</span>
//           <span className="value">${props.shipping}.00</span>
//         </li>

//         <li className="totalRow">
//           <span className="label">Tax</span>
//           <span className="value">${props.tax}.00</span>
//         </li>
//         <li className="totalRow final">
//           <span className="label">Total</span>
//           <span className="value">
//             ${props.dataPrice + props.tax + props.shipping}.00
//           </span>
//         </li>
//         <li className="totalRow">
//           <a href="#" onClick={()=>{updateTotalPrice(20)}} className="btn continue">
//             Proceed for Payment
//           </a>
//           {/* <button onClick={updateTotalPrice(20)} > test</button> */}
//         </li>
//       </ul>
//     </div>
//     <div>
//       {/* payment system */}
//     {/* <Payment fullData={props.propData} /> */}
//     </div>

//   </div>
// );

function Cart(props) {
  const h = useSelector((state) => state.cart);
  const hh = h.map((e) => e[0]);
  const dataPrice = hh.map((e) => e.Price).reduce((a, b) => a + b, 0);
  const tax = 15;
  const shipping = 4;

  return (
    // <div className="heightBug">
    <div className="mainWindw">
      {/* <h1 className="projTitle"> {props.hh}</h1> */}
      <div className="titlewindow">
        <h1 className="myCart"> Your Cart</h1>
        <Link to="/" className="btn continue">
          Continue Shopping
        </Link>
      </div>
      <div className="carta">
        <div className="cartwrapp">
          {hh.length === 0 ? (
            <h1 style={{ marginTop: "100px", marginBottom: "100px" }}>
              Please add some Items for checkout
            </h1>
          ) : (
            <Table
              style={{ margin: "0" }}
              propData={hh}
              dataPrice={dataPrice}
              tax={tax}
              shipping={shipping}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
