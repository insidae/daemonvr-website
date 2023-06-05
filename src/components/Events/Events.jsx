import React, { Component } from "react";
import latest from "./Poster-Design-Alt01.jpg";
import gallery from "./Poster-Design-Alt01.jpg";

class Events extends Component {
  render() {
    return (
      <div className="x">
        <div className="hero">
          <img className="poster" src={latest} alt="Latest Event" />
          <img className="event poster" src="assets/images/events/Colourways.jpg" alt="DÆMONVR event poster" />
        </div>
      </div>
    );
  }
}

export default Events;
