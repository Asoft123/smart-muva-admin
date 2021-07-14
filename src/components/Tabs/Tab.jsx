import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    width: "95%",
    marginLeft: "20px",
    paddingTop: "32px",
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    width: "10px",
    textTransform: "capitalize",
  },
  activeBg: {
    background: "#FFFFFF",
    border: "1px solid rgba(230, 168, 255, 0.35)",
    boxSizing: "border-box",
    boxShadow: "0px 2px 8px rgba(10, 2, 13, 0.08)",
    borderRadius: "4px",
    width: "40px",
  },
}));

export default function ScrollableTabsButtonAuto({
  label1,
  label2,
  children1,
  children2,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="inherit"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label={label1}
            {...a11yProps(0)}
            className={clsx(classes.tabs, { [classes.activeBg]: value === 0 })}
          />

          <Tab
            label={label2}
            className={clsx(classes.tabs, { [classes.activeBg]: value === 1 })}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {children1}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {children2}
      </TabPanel>
    </div>
  );
}
