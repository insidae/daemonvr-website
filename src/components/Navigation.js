/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Link } from "gatsby";

export default class Navigation extends Component {
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const { menuLinks } = this.props;
    const menuActive = this.state.showMenu ? 'active' : '';

    return (
      <nav id="top">
        <div className="nav-container">
          <div className="nav-mobile">
            <a id="nav-toggle" className={`${menuActive}`} onClick={this.toggleMenu} href="#!"><span /></a>
          </div>
          <div className={`menu-links ${menuActive}`}>
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="timezones">
            <div className="time">
              00<span className="blink">:</span>00
              <div className="timezone">GMT</div>
            </div>
            <div className="time">
              00<span className="blink">:</span>00
              <div className="timezone">EDT</div>
            </div>
            <div className="time">
              00<span className="blink">:</span>00
              <div className="timezone">JST</div>
            </div>
          </div>
{/*           <div className="user-links">
            <a
              href="https://twitter.com/d_ae_mon_vr"
              target="_blank"
              rel="noopener noreferrer"
              className="Twitter"
            >
              <img src="/icons/fa-Twitter.svg" alt="Twitter" />
            </a>
          </div> */}
        </div>
      </nav>
    );
  }
}
