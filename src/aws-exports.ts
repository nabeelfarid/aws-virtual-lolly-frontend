const awsmobile = {
  aws_appsync_region: "us-east-2",
  aws_appsync_graphqlEndpoint:
    "https://o76vth4o4jgz3ksdmyc44iak2i.appsync-api.us-east-2.amazonaws.com/graphql",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.GATSBY_AWS_APPSYNC_API_KEY,
};

export default awsmobile;
