import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import SearchBox from "../Components/searchBox";
import AddContacts from "../Components/addContacts";
import ContactsTable from "../Components/contactsTable";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundImage:
      "linear-gradient(to right bottom, #051937, #5d2d60, #b63f61, #ee7541, #ebc512)",
    padding: "60px",
    flexWrap: "wrap",
  },
  searchBox: {
    display: "flex",
    backgroundColor: "white",
    width: "400px",
    height: "55px",
    justifyContent: "space-evenly",
    padding: "5px",
  },
};

class ContactsContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.searchBox}>
          <>
            <SearchBox />
          </>
          <>
            <AddContacts />
          </>
        </div>
        <ContactsTable />
      </div>
    );
  }
}

export default withStyles(style)(ContactsContainer);
