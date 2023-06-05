import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Shop from "../components/Shop/Shop";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class ShopPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`Shop | ${config.siteTitle}`} />
          <SEO />
          <Shop />
        </div>
      </Layout>
    );
  }
}

export default ShopPage;
