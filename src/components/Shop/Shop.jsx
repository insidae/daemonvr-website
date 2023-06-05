import React, { Component } from "react";
import T_Shirt_01 from "./T-Shirt-01-Alt.png";
import T_Shirt_02 from "./T-Shirt-02-Alt.png";
import T_Shirt_03 from "./T-Shirt-03-Alt.png";
import T_Shirts from "./T-Shirt-Collection.jpg";
import Stickers from "./Laptop-Stickers.jpg";

class Shop extends Component {
  render() {
    return (
      <div className="x">
        <div className="generic-wrapper">
          <div className="columns two product">
            <div className="panel white">
              <img src={T_Shirt_01} alt="T-Shirts" />
            </div>
            <div className="panel transparent">
              <h2 className="heading">
                ASCII Tee
                <span>T-Shirt</span>
              </h2>
              <p className="copy">
                <span className="strike">£40.00</span> SOLD OUT
              </p>
              <p className="copy">
                Size:
                M L XL XXL
              </p>
              <p className="copy">
                Quantity:
                - 1 +
              </p>
              <p className="copy">
                Premium short sleeve T-shirt in vintage black with screen-printed graphics.
              </p>
              <ul className="list">
                <li>Limited production 1 of 100</li>
                <li>Crew neck</li>
                <li>100% cotton</li>
                <li>Machine wash cold - dry low / hang dry</li>
                <li>Do not iron print</li>
              </ul>
            </div>
          </div>
          <div className="columns two product">
            <div className="panel white">
              <img src={T_Shirt_02} alt="T-Shirts" />
            </div>
            <div className="panel transparent">
              <h2 className="heading">
                Tokyo Tee
                <span>T-Shirt</span>
              </h2>
              <p className="copy">
                <span className="strike">£40.00</span> SOLD OUT
              </p>
              <p className="copy">
                Size:
                M L XL XXL
              </p>
              <p className="copy">
                Quantity:
                - 1 +
              </p>
              <p className="copy">
                Premium short sleeve T-shirt in vintage black with screen-printed graphics.
              </p>
              <ul className="list">
                <li>Limited production 1 of 100</li>
                <li>Crew neck</li>
                <li>100% cotton</li>
                <li>Machine wash cold - dry low / hang dry</li>
                <li>Do not iron print</li>
              </ul>
            </div>
          </div>
          <div className="columns two product">
            <div className="panel white">
              <img src={T_Shirt_03} alt="T-Shirts" />
            </div>
            <div className="panel transparent">
              <h2 className="heading">
                Noise Tee
                <span>T-Shirt</span>
              </h2>
              <p className="copy">
                <span className="strike">£40.00</span> SOLD OUT
              </p>
              <p className="copy">
                Size:
                M L XL XXL
              </p>
              <p className="copy">
                Quantity:
                - 1 +
              </p>
              <p className="copy">
                Premium short sleeve T-shirt in vintage black with screen-printed graphics.
              </p>
              <ul className="list">
                <li>Limited production 1 of 100</li>
                <li>Crew neck</li>
                <li>100% cotton</li>
                <li>Machine wash cold - dry low / hang dry</li>
                <li>Do not iron print</li>
              </ul>
            </div>
          </div>
          <img className="poster" src={T_Shirts} alt="T-Shirts" />
          <h2>Apparel</h2>
          <img className="poster" src={Stickers} alt="Stickers" />
          <h2>Accessories</h2>
          <img className="event poster" src="/images/events/Colourways.jpg" alt="DÆMONVR event poster" />
          <h2>Event Posters</h2>
          <br />
        </div>
      </div>
    );
  }
}

export default Shop;
