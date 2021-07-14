import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const data = [
  {
    name: "18th Aug",
    uv: 29000,
  },
  {
    name: "20th Aug",
    uv: 18000,
  },
  {
    name: "22nd Aug",
    uv: 27000,
  },
  {
    name: "24th Aug",
    uv: 100000,
  },
  {
    name: "Page D",
    uv: 75000,
  },
  {
    name: "Page E",
    uv: 0,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "100%",
    },
  },
  chartHeader: {
    display: "flex",
  },
}));
const RevenueChart = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classes.chartHeader}>
            <h2>N1,678,799.64</h2>
            <p>EARNED</p>
          </div>
          <ResponsiveContainer width="100%" aspect={1.78}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#FFB11A"
                fill="#FFF8E9"
                dot={{ fill: "#FFB11A" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Paper>
      </div>
    </>
  );
};

export default RevenueChart;
