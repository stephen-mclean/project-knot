import React, { Fragment } from "react";
import { AlertContainer, alerts } from "./";

export default WrappedComponent => ({ props }) => {
  return (
    <Fragment>
      <AlertContainer />
      <WrappedComponent {...props} alerts={alerts} />
    </Fragment>
  );
};
