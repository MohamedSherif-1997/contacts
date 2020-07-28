import React from "react";

import ContactsContainer from "./Container";
import { withStyles } from "@material-ui/core/styles";

const style = {
  App: {
    backgroundImage:
      "linear-gradient(to right bottom, #051937, #5d2d60, #b63f61, #ee7541, #ebc512)",
  },
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.App}>
      <ContactsContainer />
    </div>
  );
}

export default withStyles(style)(App);
