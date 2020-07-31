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

import UserDetailCard from "../Components/userDetailCard";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    padding: "40px 50px 0 0",
    maxWidth: 650,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default function ContactsTable(props) {
  const classes = useStyles();
  const { contactsDetails } = props;
  const [row, setRow] = React.useState(contactsDetails[0]);

  const handleUserClick = (row) => {
    setRow(row);
  };

  return (
    <div className={classes.content}>
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
                <TableCell align="center">PHONE-NUMBER</TableCell>
              </TableRow>
            </TableHead>
            {contactsDetails.length > 0 ? (
              <TableBody>
                {contactsDetails.map((row, index) => (
                  <TableRow key={index} onClick={() => handleUserClick(row)}>
                    <TableCell component="th" scope="row">
                      <Checkbox
                        value="checkedA"
                        inputProps={{ "aria-label": "Checkbox A" }}
                      />
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.phone_number}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <>No Data</>
            )}
          </Table>
        </TableContainer>
      </div>
      <div style={{ padding: "60px 0px 0px 50px" }}>
        {row && <UserDetailCard userDetail={row} />}
      </div>
    </div>
  );
}
