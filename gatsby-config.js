const tailwind = require('tailwindcss')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Henlo Prismic',
    separator: '|',
    baseTitle: 'Henlo Prismic',
    author: `@cleancommit`,
    lang: 'en',
    siteUrl: `https://cleancommit.io`,
    themeColor: '#EFE5DA',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-preload-fonts',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwind,
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'henloprismic',
        schemas: {
          page: require('./custom_types/page.json'),
          blog_post: require('./custom_types/blog_post.json'),
          header_navigation: require('./custom_types/header_navigation.json'),
          footer_navigation: require('./custom_types/footer_navigation.json'),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
