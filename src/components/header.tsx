import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Typography, Box, useTheme, Grid } from "@material-ui/core";
import GithubCorner from "react-github-corner";
import useSiteMetadata from "../hooks/useSiteMetaData";

interface HeaderProps {
  pathname?: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  const theme = useTheme();
  const siteMetadata = useSiteMetadata();

  // console.log("path", props.pathname);
  return (
    <Box mx="auto" textAlign="center" my={4}>
      <GithubCorner
        href={siteMetadata.repo}
        bannerColor={theme.palette.success.main}
      />

      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            color="secondary"
            component={GatsbyLink}
            to="/"
            style={{ textDecoration: "none" }}
          >
            {siteMetadata.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary">
            {siteMetadata.subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Box>
   
  );
};

export default Header;
