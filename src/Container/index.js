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
      open: false,
    };
  }
  componentDidMount() {
    Promise.resolve(CONTACTS_DETAILS).then((response) =>
      this.setState({ contactsDetails: response })
    );
  }

  addContact = (val) => {
    let newContact = this.state.contactsDetails;
    newContact.push(val);
    this.setState({ contactsDetails: newContact, open: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { contactsDetails, open } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.searchBox}>
          <div style={{ backgroundColor: "whitesmoke", color: "black" }}>
            <SearchBox contactsDetails={contactsDetails} />
          </div>
          <div>
            <AddContacts
              addContact={this.addContact}
              open={open}
              handleClickOpen={this.handleClickOpen}
              handleClose={this.handleClose}
            />
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
