import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { Box, useTheme, CircularProgress } from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import KulfiNotFound from "./kulfiNotFound";
import useSiteMetadata from "../hooks/useSiteMetaData";
import KulfiCard from "./kulfiCard";
import * as queries from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { GetLollyQuery } from "../API";

interface KulfiMakerProps extends RouteComponentProps {
  id?: string;
}

const KulfiMaker: React.FC<KulfiMakerProps> = (props) => {
  const theme = useTheme();
  const { siteUrl } = useSiteMetadata();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState<GetLollyQuery>(null);

  // const { loading, error, data } = useQuery(GET_KULFI_BY_SHORTID, {
  //   variables: {
  //     shortId: props.id,
  //   },
  //   skip: !props.id,
  // });

  const fetchLolly = async () => {
    try {
      console.log("Getting Lolly...");

      const { data } = (await API.graphql(
        graphqlOperation(queries.getLolly, { id: props.id })
      )) as {
        data: GetLollyQuery;
      };
      console.log("Get Lolly data: ", data);
      setData(data);
    } catch (e) {
      console.error("Get Lolly Error:", e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchLolly();
  }, []);

  if (error || !props.id) {
    return <KulfiNotFound />;
  }
  return (
    <>
      <Box mx="auto" textAlign="center">
        {loading && (
          <div>
            <CircularProgress color="secondary" />
          </div>
        )}
        {data && (
          <>
            <KulfiCard siteUrl={siteUrl} data={data.getLolly} />
          </>
        )}
      </Box>
      {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
    </>
  );
};

export default KulfiMaker;
