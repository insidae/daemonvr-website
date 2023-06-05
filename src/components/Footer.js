/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <div className="left">
              <a target="blank" className="footer-link vrchat-icon" href="https://vrchat.com/home/launch?worldId=wrld_e939ef95-097b-496a-bd9d-f55f89152d18">VR CHAT LINK</a>
              <p>© 2023, DÆMONVR.</p>
            </div>
            <div className="center">
              <p>You are the 1,234,567th visitor</p>
            </div>
            <div className="right">
              <a target="blank" className="footer-link twitter-icon" href="https://twitter.com/D_ae_MON_VR"><span>@D_ae_MON_VR</span></a>
              <a target="blank" className="footer-link discord-icon" href="https://discord.gg/6DkwNnUxRt"><span>DISCORD.GG/dæmonVR</span></a>
              <a className="footer-link" href="/">Terms & conditions, privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
