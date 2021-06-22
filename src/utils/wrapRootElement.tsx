import React from "react";
import RootLayout from "../components/rootLayout";
import AmplifyConfigurationWrapper from "./AmplifyConfigurationWrapper";

export const wrapRootElement = ({ element }) => {
  console.info(`inside wrapRootElement`);

  return (
    <RootLayout>
      <AmplifyConfigurationWrapper>
          {element}
      </AmplifyConfigurationWrapper>
    </RootLayout>
  );
};
