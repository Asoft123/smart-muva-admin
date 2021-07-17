import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  // Avatar,
  // Grid,
  Typography,
  // TablePagination,
  // TableFooter,
} from "@material-ui/core";

const Orders = [
  {
    trip_id: "103457NT",
    rider_name: "Manuel Osaretin",
    sender_details: "Nsikan Etukudoh",
    recipient_details: "Tammy Jerome",
    item_category: "Breakables",
    type: "Now",
    trip_fare: "N350",
    created_on: "5th Jul, 2020",
    pickup_date_time: "15th Jul, 2020",
    status: "Pending",
  },
  {
    trip_id: "103457NT",
    rider_name: "Manuel Osaretin",
    sender_details: "Nsikan Etukudoh",
    recipient_details: "Tammy Jerome",
    item_category: "Breakables",
    type: "Now",
    trip_fare: "N350",
    created_on: "5th Jul, 2020",
    pickup_date_time: "15th Jul, 2020",
    status: "Approved",
  },
  {
    trip_id: "103457NT",
    rider_name: "Manuel Osaretin",
    sender_details: "Nsikan Etukudoh",
    recipient_details: "Tammy Jerome",
    item_category: "Breakables",
    type: "Now",
    trip_fare: "N350",
    created_on: "5th Jul, 2020",
    pickup_date_time: "15th Jul, 2020",
    status: "Cancelled",
  },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    margin: "3.12rem 0rem",
    maxWidth: "100%",
  },

  tableTitle: {
    padding: "16px 16px 0px",
    color: "#707070",
    fontWeight: "500",
  },
  tableHeaderCell: {
    color: "#898989",
    // fontSize: "0.875rem",
  },
  tableRowCell: {
    color: "#707070",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

function RecentOrders() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Typography variant="h5" gutterBottom className={classes.tableTitle}>
        RECENT ORDERS
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Trip Id</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Rider Name
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Sender Details
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Reciepient Details
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Item Category
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Type</TableCell>
            <TableCell className={classes.tableHeaderCell}>Trip Fare</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Created On
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Pick Up Date/Time
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableRowCell}>
          {Orders.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Typography variant="subtitle2">{row.trip_id}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{row.rider_name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  {row.sender_details}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  {row.recipient_details}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{row.item_category}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{row.type}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{row.trip_fare}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{row.created_on}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">
                  {row.pickup_date_time}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (row.status === "Approved" && "#44BBA5") ||
                      (row.status === "Pending" && "#44005E") ||
                      (row.status === "Cancelled" && "#E94F37"),
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}

export default RecentOrders;
