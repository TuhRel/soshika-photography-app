/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  proxy: [
    {
      prefix: '/customers',
      url: 'http://localhost:5000',
    },
  ],
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "galleries",
        path: `${__dirname}/src/galleries/`,
      },
    },
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
        name: "weddingImages",
        path: `${__dirname}/src/images/weddingImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "landingPageImages",
        path: `${__dirname}/src/images/landingPageImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "submenuSectionImages",
        path: `${__dirname}/src/images/submenuSectionImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "portfolioPageCoverImages",
        path: `${__dirname}/src/images/portfolioPageCoverImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "brandingImages",
        path: `${__dirname}/src/images/brandingImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "coupleImages",
        path: `${__dirname}/src/images/coupleImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "graduationImages",
        path: `${__dirname}/src/images/graduationImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "maternityImages",
        path: `${__dirname}/src/images/maternityImages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "publishImages",
        path: `${__dirname}/src/images/publishImages/`,
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
    {
      resolve: 'gatsby-source-mongodb',
      options: {
          dbName: 'sjphotography',
          collection: 'customers',
      }
  },
  ],
}
