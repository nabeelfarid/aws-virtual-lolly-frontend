require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Virtual Lolly`,
    subtitle: `because we all know someone who deserves some sugar 🍭`,
    slogan: `Virtual Lollies for all!`,
    description: `A place to grab a virtual Lolly because we all know someone who deserves some sugar.`,
    author: `Nabeel`,
    repo: "https://github.com/nabeelfarid/aws-virtual-lolly-frontend",
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AWS Virtual Lolly`,
        short_name: `vLolly`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/dynamiclolly/*`] },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `virtualLolly`,
        fieldName: `virtualLolly`,
        url: "https://o76vth4o4jgz3ksdmyc44iak2i.appsync-api.us-east-2.amazonaws.com/graphql",
        headers: {
          "x-api-key": process.env.GATSBY_AWS_APPSYNC_API_KEY,
        },
      },
    },
  ],
};
