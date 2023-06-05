import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Info from "../components/Info/Info";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class InfoPage extends Component {
  render() {
    return (
      <Layout>
        <div className="x">
          <Helmet title={`Info | ${config.siteTitle}`} />
          <SEO />
          <Info />
        </div>
      </Layout>
    );
  }
}

export default InfoPage;
