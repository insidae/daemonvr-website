import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Events from "../components/Events/Events";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class EventsPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`Events | ${config.siteTitle}`} />
          <SEO />
          <Events />
        </div>
      </Layout>
    );
  }
}

export default EventsPage;
