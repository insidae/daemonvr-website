/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const { data } = this.props;

    const postEdges = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="x">
          <Helmet title={config.siteTitle} />
          <SEO />
          <div className="hero">
            <div className="code left run">
              <span>Loading program...</span>
              <span>Running daemon...</span>
              <span>ONLINE</span>
              <span>&nbsp;</span>
              <span>Building world...</span>
              <span>Rendering venue...</span>
              <span>READY</span>
            </div>
            <div className="code right">
              BETA TEST
            </div>
            <div className="ascii glitch">
              <img className="logo glitch-img" src="/images/ascii_logo.png" alt="DÆMONVR logo" />
              <img className="logo glitch-img" src="/images/ascii_logo.png" alt="DÆMONVR logo" />
              <img className="logo glitch-img" src="/images/ascii_logo.png" alt="DÆMONVR logo" />
              <img className="logo glitch-img" src="/images/ascii_logo.png" alt="DÆMONVR logo" />
              <img className="logo glitch-img" src="/images/ascii_logo.png" alt="DÆMONVR logo" />
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
        </div>
        <div className="container">
          <div className="columns three">
            <div className="panel">
              <div className="copy">
                <span className="cool-font">You have been summoned</span>
                <p>Now leave your reality behind.</p>
                <p>Visit a place unlike any you’ve experienced before. 
                A hidden venue, only ever a short walk away. Waiting for those who know where to look.</p>
                <p>DÆMONVR is a virtual club, hosting live events, offering 
                total immersion in a richly detailed virtual world.</p>
                <span className="cool-font">You have been summoned</span>
              </div>
            </div>
            <div className="panel">
              <img src="/images/img_01.png" alt="" />
            </div>
            <div className="panel">
              <img src="/images/img_02.png" alt="" />
              {/* <PostListing postEdges={postEdges} />
              <Link className="more" to="/journal">See more...</Link> */}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Main" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 160)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date(formatString: "dddd DD MMMM YYYY")
          }
        }
      }
    }
  }
`;
