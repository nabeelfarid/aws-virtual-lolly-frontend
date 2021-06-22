import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import useSiteMetadata from "../hooks/useSiteMetaData";
import { Box } from "@material-ui/core";
import KulfiCard from "../components/kulfiCard";

export const query = graphql`
  query ($id: String!) {
    virtualLolly {
      getLolly(id: $id) {
        id
        to
        from
        message
        colorTop
        colorBottom
        colorMiddle
      }
    }
  }
`;

const Lolly = (props) => {
  const { slogan, siteUrl } = useSiteMetadata();

  console.log(
    "Building Static Page for Kulfi:",
    JSON.stringify(props.data, null, 4)
  );
  return (
    <Layout>
      <Seo title={slogan} />
      <Box mx="auto" textAlign="center">
        <KulfiCard siteUrl={siteUrl} data={props.data.virtualLolly.getLolly} />
      </Box>
    </Layout>
  );
};

export default Lolly;
