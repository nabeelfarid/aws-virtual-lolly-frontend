import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const RootLayout = (props) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      {props.children}
    </>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
