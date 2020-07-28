import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
  tableContainer: {
    paddingTop: "50px",
    maxWidth: 650,
  },
});

export default function ContactsTable(props) {
  const classes = useStyles();
  const { contactsDetails } = props;

  return (
    <>
      {!contactsDetails ? (
        <h3>Loading....</h3>
      ) : (
        <div className={classes.tableContainer}>
          <TableContainer
            component={Paper}
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #053537, #005f5a, #008d73, #00bc81, #12eb83",
            }}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>NAME</TableCell>
                  <TableCell align="center">EMAIL-ID</TableCell>
                  <TableCell align="center">PHONE-NUMBER</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contactsDetails.length > 0 ? (
                  contactsDetails.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        <Checkbox
                          value="checkedA"
                          inputProps={{ "aria-label": "Checkbox A" }}
                        />
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.email_id}</TableCell>
                      <TableCell align="center">{row.phone_number}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <h3>No Data</h3>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
