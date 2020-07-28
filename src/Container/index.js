import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import SearchBox from "../Components/searchBox";
import AddContacts from "../Components/addContacts";
import ContactsTable from "../Components/contactsTable";
import { CONTACTS_DETAILS } from "../constants/string";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "60px",
    overFlow: "auto",
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
  constructor(props) {
    super(props);
    this.state = {
      contactsDetails: [],
    };
  }
  componentDidMount() {
    Promise.resolve(CONTACTS_DETAILS).then((response) =>
      this.setState({ contactsDetails: response })
    );
  }

  render() {
    const { classes } = this.props;
    const { contactsDetails } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.searchBox}>
          <div>
            <SearchBox />
          </div>
          <div>
            <AddContacts />
          </div>
        </div>
        <div>
          <ContactsTable contactsDetails={contactsDetails} />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(ContactsContainer);
