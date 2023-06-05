/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import { Link } from "gatsby";
import photo from "./LCD_Screen.gif";
import headset from "./headset_icon.png";
import laptop from "./laptop_icon.png";
import music from "./FW_Mini_Disc.jpg";

class Info extends Component {
  render() {
    return (
      <div className="x">
        <div className="container">
          <div className="generic-wrapper">
            <div className="columns two">
              <div className="panel">
                <h2 className="heading">
                  Welcome
                  <span>01</span>
                </h2>
                <div className="bio">
                  <span className="cool-font">You have been summoned</span>
                  <p>
                    Now leave your reality behind.
                  </p>
                  <p>
                    Visit a place unlike any you’ve experienced before. 
                    A hidden venue, only ever a short walk away. Waiting for those who know where to look.
                  </p>
                  <p>
                    DÆMONVR is a virtual club, hosting live events, offering 
                    total immersion in a richly detailed virtual world.
                  </p>
                  <p>
                    Meet others like yourself. Others who have discovered 
                    how to travel freely between worlds.
                  </p>
                  <hr />
                </div>
              </div>
              <img className="photo" src={photo} alt="Coming soon" />
            </div>
          </div>
        </div>

        <div className="ticker-wrap">
          <div className="ticker">
            <div className="ticker__item">
              01011001 01101111 01110101 00100111 01110110 01100101 00100000 01100010 01100101 01100101 01101110 00100000 01110011 01110101 01101101 01101101 01101111 01101110 01100101 01100100 00101110 00100000&nbsp;
            </div>
            <div className="ticker__item">
              01011001 01101111 01110101 00100111 01110110 01100101 00100000 01100010 01100101 01100101 01101110 00100000 01110011 01110101 01101101 01101101 01101111 01101110 01100101 01100100 00101110 00100000&nbsp;
            </div>
            <div className="ticker__item">
              01011001 01101111 01110101 00100111 01110110 01100101 00100000 01100010 01100101 01100101 01101110 00100000 01110011 01110101 01101101 01101101 01101111 01101110 01100101 01100100 00101110 00100000&nbsp;
            </div>
            <div className="ticker__item">
              01011001 01101111 01110101 00100111 01110110 01100101 00100000 01100010 01100101 01100101 01101110 00100000 01110011 01110101 01101101 01101101 01101111 01101110 01100101 01100100 00101110 00100000&nbsp;
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="columns one">
            <div className="panel">
              <h2 className="heading">
                How do I join?
                <span>02</span>
              </h2>
              <p className="copy">
                A VRChat account and a Discord account are required to enter DÆMONVR. First, join our Discord server from the link in the footer, then read and agree to the rules.
                <br />
                <br />
                After the above steps are completed, you will be able to join our events. Check out the guide found in the server to learn how to join the instance.
              </p>
              <img className="icon" src={headset} alt="VR Headset" />
              <img className="icon" src={laptop} alt="Laptop / PC" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns one">
            <div className="panel">
              <h2 className="heading">
                Samples
                <span>03</span>
              </h2>
              <img className="x" src={music} alt="Coming soon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
