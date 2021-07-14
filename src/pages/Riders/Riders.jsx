import React from "react";
import RecentOrders from "../../components/RecentOrders/RecentOrders";
import Tab from "../../components/Tabs/Tab";
import ScheduleTable from "./ScheduleTable";
import Container from "@material-ui/core/Container";

const Riders = () => {
  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Tab
            label1="Now"
            label2="Schedule"
            children1={<RecentOrders />}
            children2={<ScheduleTable />}
          />
        </Container>
      </div>
    </>
  );
};
export default Riders;
