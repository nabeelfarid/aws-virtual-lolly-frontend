import * as React from "react";
import PropTypes from "prop-types";
import { Box, Container, Divider, Link, Typography } from "@material-ui/core";
import Header from "./header";
import useSiteMetadata from "../hooks/useSiteMetaData";

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Container maxWidth="md">
        <Header />
        <Box>
          <main>{children}</main>
          <footer>
            <Box mt={5} textAlign="center">
              <Divider />
              <Box mt={1}>
                <Typography>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <Link
                    color="primary"
                    href="https://www.gatsbyjs.com"
                    target="blank"
                    rel="noopener"
                  >
                    Gatsby
                  </Link>
                </Typography>
                <Typography>
                  {"Powered by "}
                  <Link
                    color="primary"
                    href="https://material-ui.com/"
                    target="blank"
                    rel="noopener"
                  >
                    Material-UI
                  </Link>
                  {", "}
                  <Link
                    color="secondary"
                    href="https://aws.amazon.com/"
                    target="blank"
                    rel="noopener"
                  >
                    AWS
                  </Link>
                  {", "}
                  <Link
                    color="primary"
                    href="https://aws.amazon.com/appsync/"
                    target="blank"
                    rel="noopener"
                  >
                    AppSync
                  </Link>
                  {", "}
                  <Link
                    color="primary"
                    href="https://graphql.org/"
                    target="blank"
                    rel="noopener"
                  >
                    GraphQL
                  </Link>
                  {" and "}
                  <Link
                    color="primary"
                    href="https://aws.amazon.com/dynamodb/"
                    target="blank"
                    rel="noopener"
                  >
                    DynamoDB
                  </Link>
                  {"."}
                </Typography>
                <Typography>
                  {"Hosted on "}
                  <Link
                    color="primary"
                    href="https://aws.amazon.com/cloudfront/"
                    target="blank"
                    rel="noopener"
                  >
                    AWS Cloudfront
                  </Link>
                  {", written by "}
                  <Link
                    color="secondary"
                    href="https://www.facebook.com/nomadicnabeel"
                    target="blank"
                    rel="noopener"
                  >
                    {siteMetadata.author}
                  </Link>
                  {", inspired by Phil Hawksworth's "}
                  <Link
                    color="primary"
                    href="https://css-tricks.com/static-first-pre-generated-jamstack-sites-with-serverless-rendering-as-a-fallback/"
                    target="blank"
                    rel="noopener"
                  >
                    post
                  </Link>
                </Typography>
              </Box>
            </Box>
          </footer>
        </Box>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
