import React, { Component, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./navbar";
//import hooks & redux
import { useSelector, useDispatch } from "react-redux";
import { increment, updateCart } from "../actions";

export default function Product(props) {
  const dispatch = useDispatch();
  const MainData = useSelector((mainData) => mainData.data);
  const cart = useSelector((state) => state.cart);
  const [carty, setCarty] = useState();

  const filteredItem = MainData.filter((e) => e._id === props.match.params.id);

  const addToCartTest = (id) => {
    const h = MainData.filter((e) => e._id === id);
    dispatch(updateCart(h));
    setCarty(h);
  };
  return (
    <div className="bodyWrap">
      <div className="productStage">
        <div className="folderTab clearFix">
          <div className="breadCrumbs">
            <Link to="/">Home </Link>
            <Link to="/">Product Group</Link>
          </div>
        </div>
        <div className="botBorder clearFix">
          <div className="productImage">
            <img
              style={{ width: "300px", height: "300px" }}
              src={filteredItem.map((e) => e.Piclink)}
            />
            <ul className="imageList">
              <li>
                <a href="#">
                  <img src="92X92" alt="92x92" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="92X92" alt="92x92" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="92X92" alt="92x92" />
                </a>
              </li>
            </ul>
            <span>
              <a href="#">
                <b>View More</b>
              </a>
            </span>
          </div>
          <div className="overview">
            <h1>{filteredItem.map((e) => e.FoodName)}</h1>
            <h2>{filteredItem.map((e) => e.VenueName)}</h2>
            <span className="rating">
              <img src="sbahgh" alt="Rating" />
            </span>
            <h3>${filteredItem.map((e) => e.Price)}.00</h3>
            {/* <span>50+ available</span> */}
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              aliquam elementum est, at vestibulum augue consequat at. Donec
              euismod convallis felis. Nam sed molestie dolor. Proin in tortor
              sed augue consequat viverra.
            </span>

            <select className="prodSelect">
              <option selected>Current Product</option>
              <option>Product Option 2</option>
              <option>Product Option 3</option>
              <option>Product Option 4</option>
              <option>Product Option 5</option>
            </select>
            <button
              onClick={() => {
                console.log(filteredItem.map((e) => e._id)[0]);
                addToCartTest(filteredItem.map((e) => e._id)[0]);
              }}
            >
              Add to Cart
            </button>
            <div className="button wish">Add to Wishlist</div>
          </div>

          <div className="info">
            <h3>Product Information</h3>
            <ul className="specs">
              <li>
                <h5>Weight:</h5> Worsted
              </li>
              <li>
                <h5>Gauge (sts. / inch):</h5> 4.5
              </li>
              <li>
                <h5>US Needle:</h5> 8
              </li>
              <li>
                <h5>Yardage:</h5> 220
              </li>
              <li>
                <h5>Primary Fiber:</h5> 100% Wool
              </li>
              <li>
                <h5>Specific Fiber:</h5> 100% Pure New Wool
              </li>
              <li>
                <h5>Physical Weight:</h5> 100g
              </li>
              <li>
                <h5>Washing Instructions:</h5> Hand Wash
              </li>
            </ul>

            <div className="description">
              The classNameic Cascade 220 Wool is the perfect combination of
              affordability, quality and versatility that can be used for a wide
              range of projects. Each hank of this worsted weight 100% pure wool
              comes with a generous 220 yards. With a nearly unlimited color
              palette to chose from, you are sure to find the perfect color(s)
              for your next project! Note: this yarn is great for felting
              projects too!
            </div>
          </div>

          <div className="info">
            <h3> Product From Same Venue</h3>
            {MainData.map((e) => (
              <div className="product vtop soft">
                <a href="#">
                  <div className="smallBox">
                    <img
                      style={{ width: "92px", height: "92px" }}
                      src={e.Piclink}
                    />
                  </div>
                  <span className="manuName">{e.VenueName}</span>
                  <span className="prodName">{e.FoodName}</span>
                </a>
                <span className="prodPrice">${e.Price}.00</span>
              </div>
            ))}

            <div className="info">
              <h3>Product Reviews</h3>
              <div className="review">
                <span className="title">
                  A favorite
                  <br />
                  <img className="stars" src="dshsHGFHKJ" alt="STARS" />
                </span>
                <span className="comments">
                  This is my go-to, workhorse yarn. It comes in a zillion
                  colors, is fairly soft to touch better with a soak, and holds
                  up well over time. Definitely a tried and true standard.
                </span>
                <span className="author">By kaitmurphy on April 11, 2014</span>
                <div className="vote">
                  Was this review helpful?
                  <input type="submit" value="Yes" />
                </div>
              </div>

              <div className="review">
                <span className="title">
                  Great Felting Yarn!
                  <br />
                  <img className="stars" src="STARTS" />
                </span>

                <span className="comments">
                  Noni's Patterns call the Cascade 220 in many of her patterns
                  becuase of it's felting qualities. It is a lovely yarn to work
                  with.
                </span>
                <span className="author">By lulu5156 on December 31, 2013</span>
                <div className="vote">
                  Was this review helpful?
                  <input type="submit" value="Yes" />
                </div>
              </div>

              <div className="review">
                <span className="title">
                  A little rough but nice!
                  <br />
                  <img className="stars" src="STRARS" />
                </span>

                <span className="comments">
                  I made a mistake in ordering this because I was meaning to
                  order the superwash, which is much softer. But, that being
                  said, this is nice yarn and is easy to work with.Colors were
                  true to the website photos.
                </span>
                <span className="author">By Lucky67 on August 27, 2013</span>
                <div className="vote">
                  Was this review helpful?
                  <input type="submit" value="Yes" />
                </div>
              </div>

              <div className="button bd submit right">Read More Reviews</div>
              <div className="button submit blueSubmit left">
                Write a Review
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* <div className="sidebar slim">
        <div className="folderTab sub clearFix">
          <h3>Similar Items</h3>
        </div>
        <div className="botBorder">
          <div className="product vtop slim">
            <a href="#">
              <div className="smallBox">
                <img src="92X92" alt="92x92" />
              </div>
              <span className="manuName">Product Group</span>
              <span className="prodName">Product Name</span>
            </a>
          </div>
          <div className="product vtop slim">
            <a href="#">
              <div className="smallBox">
                <img src="92X92" alt="92x92" />
              </div>
              <span className="manuName">Product Group</span>
              <span className="prodName">Product Name</span>
            </a>
          </div>
          <div className="product vtop slim">
            <a href="#">
              <div className="smallBox">
                <img src="92X92" alt="92x92" />
              </div>
              <span className="manuName">Product Group</span>
              <span className="prodName">Product Name</span>
            </a>
          </div>
          <div className="product vtop slim">
            <a href="#">
              <div className="smallBox">
                <img src="92X92" alt="92x92" />
              </div>
              <span className="manuName">Product Group</span>
              <span className="prodName">Product Name</span>
            </a>
          </div>
        </div>

        <div className="folderTab sub clearFix">
          <h3>Related Kits</h3>
        </div>
        <div className="botBorder">
          <div className="product vtop slim">
            <a href="#">
              <div className="smallBox">
                <img src="92X92" alt="92x92" />
              </div>
              <span className="manuName">Product Group</span>
              <span className="prodName">Product Name</span>
            </a>
          </div>
          <div className="product vtop slim">
            <a href="#">
              <div className="smallBox">
                <img src="92X92" alt="92x92" />
              </div>
              <span className="manuName">Product Group</span>
              <span className="prodName">Product Name</span>
            </a>
          </div>
          <div className="product vtop slim">
            <a href="#">
              <div className="smallBox">
                <img src="92X92" alt="92x92" />
              </div>
              <span className="manuName">Product Group</span>
              <span className="prodName">Product Name</span>
            </a>
          </div>
          <div className="product vtop slim">
            <a href="#">
              <div className="smallBox">
                <img src="92X92" alt="92x92" />
              </div>
              <span className="manuName">Product Group</span>
              <span className="prodName">Product Name</span>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
