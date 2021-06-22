/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      virtualLolly {
        getLollies {
          colorBottom
          colorMiddle
          id
          colorTop
          from
          message
          to
        }
      }
    }
  `);
  console.log("response", JSON.stringify(response, null, 4));
  response.data.virtualLolly.getLollies.forEach((lolly) => {
    console.log("creating page", lolly.id);

    createPage({
      path: `/lolly/${lolly.id}`,
      component: path.resolve("./src/templates/lolly.tsx"),
      context: {
        id: lolly.id,
      },
    });
  });
};
