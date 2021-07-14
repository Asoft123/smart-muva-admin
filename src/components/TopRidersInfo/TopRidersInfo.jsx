import React from "react";
import Avatar1 from "../../assets/Ellipse_1.png";
import Avatar2 from "../../assets/Ellipse_2.png";
import Avatar3 from "../../assets/Ellipse_3.png";
import Avatar4 from "../../assets/Ellipse_4.png";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Grid,
  Paper,
  Button,
  Typography,
  // TablePagination,
  // TableFooter,
} from "@material-ui/core";

const Riders = [
  {
    number: "1.",
    image: Avatar1,
    user: "Emmanuel Osaretin",
    ratings: "4.5",
  },
  {
    number: "2.",
    image: Avatar2,
    user: "Isreal Jacob",
    ratings: "4.5",
  },
  {
    number: "3.",
    image: Avatar3,
    user: "Sarah Fatai",
    ratings: "4.5",
  },
  {
    number: "4.",
    image: Avatar2,
    user: "Ibrahim Olaseun",
    ratings: "4.5",
  },
  {
    number: "4.",
    image: Avatar4,
    user: "Osamudia Mascot",
    ratings: "4.5",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
  tableHeaderCell: {
    color: "#707070",
    fontSize: "1.2rem",
    fontWeight: "500",
    lineHeight: "1.37rem",
  },
  avatar: {
    objectFit: "cover",
  },
  user: {
    marginTop: ".5rem",
    marginLeft: "1.12rem",
    color: "#707070",
  },
  label: {
    color: "#FFB11A",
    fontWeight: "900",
  },
}));

export default function TopRidersInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  TOP RIDERS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Riders.map((row) => (
                <TableRow key={row.Riders}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={2}>
                        <Typography className={classes.number}>
                          {row.number}
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Avatar
                          src={row.image}
                          alt={row.image}
                          className={classes.avatar}
                        />
                      </Grid>
                      <Grid item lg={8}>
                        <Typography className={classes.user}>
                          {row.user}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography color="#707070" variant="subtitle2">
                      {row.ratings}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <Button
                classes={{
                  label: classes.label,
                }}
              >
                SEE ALL
              </Button>
            </div>

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
      </Paper>
    </div>
  );
}
