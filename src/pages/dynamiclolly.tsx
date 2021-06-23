import * as React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Seo from "../components/seo";
import KulfiMaker from "../components/kulfiMaker";
import KulfiNotFound from "../components/kulfiNotFound";
import useSiteMetadata from "../hooks/useSiteMetaData";
import { useParams } from "@reach/router";
import { PageProps } from "gatsby";

// markup
const DynamicLollyPage = (props: PageProps) => {
  const { slogan } = useSiteMetadata();
  const id = props.location.hash.substring(2);
  // const params = useParams();
  console.log(props.location.hash.substring(2));
  return (
    <Layout>
      <Seo title={slogan} />
      {id && <KulfiMaker id={id} />}
      <Router>
        <KulfiMaker path="dynamiclolly/:id" />
        <KulfiMaker path="dynamiclolly/#/:id" />
      </Router>
    </Layout>
  );
};

export default DynamicLollyPage;
