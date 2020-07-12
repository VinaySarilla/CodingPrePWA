module.exports = {
  siteMetadata: {
    title: `Coding Prep`,
    description: `Progressive Web App`,
    author: `Vinay Sarilla`,
    data: ["d1", "d2", "d3"],
    person: { name: "vinay", name: "nidhi" },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coding Prep`,
        short_name: `CodingPWA`,
        start_url: `/`,
        background_color: `#0277bd`,
        theme_color: `#0277bd`,
        display: `standalone`,
        icon: `src/images/Logo.png`,
        crossOrigin: `use-credentials`,
        // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
