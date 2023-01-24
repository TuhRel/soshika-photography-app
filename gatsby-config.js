/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "heroSectionImages",
        path: `${__dirname}/src/images/heroSectionImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "aboutSectionImages",
        path: `${__dirname}/src/images/aboutSectionImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "portfolioSlideshow",
        path: `${__dirname}/src/images/portfolioSlideshow/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "weddingSlides",
        path: `${__dirname}/src/images/weddingSlides/`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Noto Serif Display`,
            file: `https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;300&display=swap`,
          },
        ],
      },
    },
  ],
}
