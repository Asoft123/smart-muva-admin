import React from "react";

import TopRidersInfo from "../../components/TopRidersInfo/TopRidersInfo";
import LineChart from "../../components/LineChart/LineChart";
import RecentOrders from "../../components/RecentOrders/RecentOrders";

import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import CustomCard from "../../components/CustomCard/CustomCard";
import totalRiders from "../../assets/Group 518.svg";
import onlineRiders from "../../assets/Group 520.svg";
import offlineRiders from "../../assets/Group 521.svg";
import pendingRiders from "../../assets/Group 518.svg";
import totalTrips from "../../assets/Group 523.svg";
import cancelledTrips from "../../assets/Group 524.svg";
import completedTrips from "../../assets/Group 525.svg";
import ongoingTrips from "../../assets/Group 527.svg";
import revenue from "../../assets/Group 528.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  ridersContainer: {
    marginTop: "50px",
    marginBottom: "50px",
  },
}));


function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Container>
        <div>
          <br />
          <br />
          <br />
          {/* <br />
      <br />
      <br />
      <br /> */}
          <Grid
            className={classes.root}
            container
            spacing={matches ? 3 : 1}
            // justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#FFF"
                title="Total Riders"
                count={5011}
                icon={totalRiders}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#40D192"
                title="Online Riders"
                count={167}
                icon={onlineRiders}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#F3402B"
                title="Offline Riders"
                count={20450}
                icon={offlineRiders}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#F3402B"
                title="Pending Riders"
                count={18000}
                icon={pendingRiders}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#F3402B"
                title="Total Trips"
                count={1410}
                icon={totalTrips}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#F3402B"
                title="Cancelled Trips"
                count={440}
                icon={cancelledTrips}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#F3402B"
                title="Completed Trips"
                count={440}
                icon={completedTrips}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#F3402B"
                title="Scheduled Trips"
                count={18000}
                icon={cancelledTrips}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#F3402B"
                title="Ongoing Trips"
                count={1410}
                icon={ongoingTrips}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                cardBackground="#F3402B"
                title="Revenue"
                count={167879964}
                icon={revenue}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.ridersContainer}>
            <Grid item lg={4}>
              <TopRidersInfo />
            </Grid>
            <Grid item lg={8}>
              <LineChart />
            </Grid>
          </Grid>
        </div>
        <RecentOrders />
      </Container>
    </>
  );
}

export default HomePage;
