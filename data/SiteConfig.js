const config = {
  siteTitle: "daemonvr.com", // Site title.
  siteTitleShort: "daemonVR", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "daemonvr.com, you've been summoned", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://daemonvr.com/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "You have been summoned. Now leave your reality behind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Updates", // Default category for posts.
  dateFromFormat: "YYYY/MM/DD", // Date format used in the frontmatter.
  dateFormat: "dddd, DD MMMM YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page. Set to zero to disable paging. See the "Pagination" section.
  userName: "daemonvr.com", // Username to display in the author segment.
  userEmail: "mail@daemonvr.com", // Email used for RSS feed's author segment
  userTwitter: "d_ae_mon_vr", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Online", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "No description", // User description to display in the author segment.
  menuLinks: [
/*     {
      name: 'Home',
      link: '/',
    }, */
    {
      name: 'Info',
      link: '/info/',
    },
    {
      name: 'Events',
      link: '/events/',
    },
    {
      name: 'Shop',
      link: '/shop/',
    }/* ,
    {
      name: 'Journal',
      link: '/journal/',
    } */
  ],
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/d_ae_mon_vr",
      iconClassName: "fa fa-twitter"
    }
  ],
  copyright: "Copyright © 2023. DÆMONVR.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#333333", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
