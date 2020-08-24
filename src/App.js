import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//import components
import Front from "./components/front";
import Cart from "./components/Cart";
import axios from "axios";
import Four from "./components/404";
import Product from "./components/Product";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Space from "./components/Space";
//import hooks & redux
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

function App() {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(0);
  const state = useSelector((state) => state.data);

  useEffect(() => {
    axios
      .get("https://glacial-tundra-03384.herokuapp.com/food/")
      .then((response) => dispatch(increment(response.data)))
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Front IntialData={state} />
          </Route>
          <Route path="/Cart" exact>
            <Cart CartData={cart} />
          </Route>
          <Route path="/Login" exact component={Cart} />
          <Route path="/Add Your Menu" exact component={Cart} />
          <Route path="/cool" exact component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Route component={Four} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
