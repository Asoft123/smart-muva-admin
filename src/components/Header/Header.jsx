import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { FiExternalLink } from "react-icons/fi";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
// import PersonOutlineIcon from "@material-ui/icons/SignOut";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PeopleIcon from "@material-ui/icons/People";
import BusinessIcon from "@material-ui/icons/Business";
import ShopIcon from "@material-ui/icons/Shop";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { FaHome } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logOutUser } from "../../redux/actions/userActions";
// import { adminApiEndPoint, packagesApiEndPoint } from "../../utils/api";
// import logo from "../../images/OBBC_LOGO.svg";
import axios from "axios";
import { setSnackbar } from "../../redux/actions/uiActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: theme.palette.white.main,
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "0px 2px 12px rgba(10, 2, 13, 0.04)",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    // display: "flex",
    // justifyContent: "space-between",
  },
  hide: {
    display: "none",
  },
  capitalize: {
    textTransform: "capitalize",
    color: theme.palette.grey[900],
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflow: "scroll",
    backgroundColor: theme.palette.yellow.main,
  },
  drawerOpen: {
    width: drawerWidth,
    // backgroundColor: theme.palette.yellow.main,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(0),
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.yellow.main,
    ...theme.mixins.toolbar,
  },
  logoDivStyle: {
    width: "120px",
    overflow: "hidden",
    padding: "5px",
    backgroundColor: theme.palette.yellow.main,
  },
  logoStyle: {
    width: "100%",
    objectFit: "cover",
  },
  active: {
    // backgroundImage: "linear-gradient(45deg, #e7e7e7,  #e6e6e6, #e6e6e6)",
    backgroundColor: theme.palette.yellow.light,
    // boxShadow:
    //   "4px 4px 10px 0 rgba(0,0,0,.1),4px 4px 15px -5px rgba(21,114,232,.4)",
    color: "#ffffff",
  },
  linkIconStyle: {
    fontSize: "14px",
    color: theme.palette.black.main,
  },
  listItemStyle: {
    // marginTop: "8px",
    paddingLeft: theme.spacing(2),
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    fontSize: "12px",
    backgroundColor: theme.palette.yellow.main,
    "&:hover": {
      backgroundColor: theme.palette.yellow.light,
    },
  },
  listItemTextStyle: {
    fontSize: "14px",
    color: theme.palette.grey[900],
    paddingLeft: "-3px",
    transform: "translateX(-31px)",
  },
  nested: {
    // paddingLeft: theme.spacing(1.7),
    display: "block",
    width: "100%",
    marginBottom: theme.spacing(0.1),
    backgroundColor: theme.palette.grey[50],
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  nestedLink: {
    fontSize: "14px",
    display: "block",
    width: "100%",

    // paddingLeft: theme.spacing(0, 4, 0, 0),
  },
  profileImage: {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    objectFit: "cover",
  },
  linkStyle: {
    // color: "#aaaaaa",
    display: "block",
    textDecoration: "none",
    textDecorationStyle: "none",

    "&::hover": {
      textDecoration: "none",
      color: "#eee",
    },
  },
  accordionSummaryStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.yellow.main,
  },
  accordionDetailsList: {
    display: "block",
    backgroundColor: theme.palette.yellow.main,
  },
  accordionDetails: {
    display: "block",
    width: "100%",
    padding: theme.spacing(0, 0, 0, 1),
    backgroundColor: theme.palette.yellow.main,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.yellow.main,
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [collapseOrderOpen, setCollapseOrderOpen] = useState(false);
  const [collapseProductOpen, setCollapseProductOpen] = useState(false);
  const [onlineUserData, setOnlineUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [packagesList, setPackagesList] = useState([]);
  const [loadingPackages, setLoadingPackages] = useState(true);
  // const [userImage, setUserImage] = useState("")
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [active, setActive] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useSelector((state) => state?.userData?.data);
  const isAuthenticated = useSelector(
    (state) => state?.userData?.isAuthenticated
  );

  //   useEffect(() => {
  //     axios
  //       .get(`${adminApiEndPoint}/${userData._id}`)
  //       .then((res) => {
  //         setOnlineUserData(res.data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [userData._id]);

  //   useEffect(() => {
  //     axios
  //       .get(`${packagesApiEndPoint}`)
  //       .then((res) => {
  //         setPackagesList(res.data.package);
  //         setLoadingPackages(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);

  //         if (err.message) {
  //           return dispatch(setSnackbar(err.message, "error"));
  //         }
  //         if (err.response && err.response.data && err.response.data.message) {
  //           console.log(err.response.data);
  //           dispatch(setSnackbar(err.response.data.message, "error"));
  //         }
  //       });
  //   }, [dispatch]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileRoute = () => {
    handleClose();
    history.push("/edit-account");
  };

  const handleRouteChange = (url) => {
    if (collapseOrderOpen) {
      setCollapseOrderOpen(false);
    }
    if (collapseProductOpen) {
      setCollapseProductOpen(false);
    }
    history.push(`/${url}`);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {!isAuthenticated && !userData?.firstname ? (
            <>
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              {""}
            </>
          ) : null}

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {!userData?.firstname ? (
              <Typography
                className={classes.capitalize}
                variant="body2"
                align="right"
              >
                {/* Welcome {userData?.firstname} */}
              </Typography>
            ) : null}{" "}
            &nbsp;
            {!isAuthenticated && !userData?.firstname ? (
              <>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="primary"
                >
                  {!loading && onlineUserData?.image ? (
                    <img
                      src={onlineUserData?.image}
                      className={classes.profileImage}
                      alt="accout owner pic"
                    />
                  ) : (
                    <div>
                      <SearchOutlinedIcon />
                      {/* <Typography>Help</Typography> */}
                      <FiExternalLink size="20" />
                      <NotificationsNoneOutlinedIcon />
                      <AccountCircleOutlinedIcon />
                    </div>
                  )}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={menuOpen}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleProfileRoute}>Edit Profile</MenuItem>
                  <MenuItem
                    onClick={() => {
                      //   dispatch(logOutUser());
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                // variant="contained"
                size="small"
                color="primary"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {/* {!isAuthenticated && userData?.firstname ? ( */}
      <Drawer
        elevation={0}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <>
            {" "}
            <div className={classes.logoDivStyle}>
              {/* <img src={logo} alt="logo" className={classes.logoStyle} /> */}
            </div>{" "}
            <IconButton color="primary" onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>{" "}
          </>
        </div>
        {/* <Divider /> */}
        <NavLink
          to="/"
          exact
          className={classes.linkStyle}
          activeClassName={classes.active}
          onClick={() => setActive("dashboard")}
        >
          <ListItem
            button
            key="Dashoard"
            className={classes.listItemStyle}
            elevation={0}
          >
            <ListItemIcon>
              <FaHome
                className={active === "dashboard" ? classes.linkIconStyle : ""}
              />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemTextStyle }}
              primary="Dashboard"
            />
          </ListItem>
        </NavLink>
        <NavLink
          to="/users"
          exact
          className={classes.linkStyle}
          activeClassName={classes.active}
          onClick={() => setActive("users")}
        >
          <ListItem
            button
            key="Users"
            className={classes.listItemStyle}
            elevation={0}
          >
            <ListItemIcon>
              <FaHome
                className={active === "users" ? classes.linkIconStyle : ""}
              />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemTextStyle }}
              primary="Users"
            />
          </ListItem>
        </NavLink>
        <NavLink
          to="/riders"
          exact
          className={classes.linkStyle}
          activeClassName={classes.active}
          onClick={() => setActive("riders")}
        >
          <ListItem
            button
            key="Riders"
            className={classes.listItemStyle}
            elevation={0}
          >
            <ListItemIcon>
              <FaHome
                className={active === "Riders" ? classes.linkIconStyle : ""}
              />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemTextStyle }}
              primary="Riders"
            />
          </ListItem>
        </NavLink>
        <NavLink
          to="/rides"
          exact
          className={classes.linkStyle}
          activeClassName={classes.active}
          onClick={() => setActive("rides")}
        >
          <ListItem
            button
            key="Rides"
            className={classes.listItemStyle}
            elevation={0}
          >
            <ListItemIcon>
              <FaHome
                className={active === "Rides" ? classes.linkIconStyle : ""}
              />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemTextStyle }}
              primary="Rides"
            />
          </ListItem>
        </NavLink>
        <Divider />
        {/* Begining of manage amount section */}

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummaryStyle}
          >
            <div>
              <AttachMoneyOutlinedIcon className={classes.linkIconStyle} />{" "}
              &nbsp; Vehicles
            </div>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.accordionDetails }}>
            <List component="div" disablePadding>
              <ListItem
                onClick={() => handleRouteChange("amounts/add-new-amount")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Add Amount"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("amounts/all-amounts")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="View Amounts"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* End of Manage Amount section */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummaryStyle}
          >
            <div>
              <AccountBalanceIcon className={classes.linkIconStyle} /> &nbsp;
              Dued Payouts
            </div>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.accordionDetails }}>
            <List component="div" disablePadding>
              <ListItem
                onClick={() => handleRouteChange("payouts/due-online-payouts")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Online Payouts"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("payouts/due-offline-payouts")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Offline Payouts"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummaryStyle}
          >
            <div>
              <PeopleIcon className={classes.linkIconStyle} /> &nbsp; Clients
            </div>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.accordionDetails }}>
            <List component="div" disablePadding>
              <ListItem
                onClick={() => handleRouteChange("users/add-user")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Add Client"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("users/online-users")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Online Clients"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("users/offline-users")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Offline Clients"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        {/* <Divider /> */}

        {/* <Divider /> */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummaryStyle}
          >
            <div>
              <MergeTypeIcon className={classes.linkIconStyle} /> &nbsp; Saving
              Packages
            </div>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.accordionDetails }}>
            <List component="div" disablePadding>
              <ListItem
                onClick={() => handleRouteChange("packages/add-package/")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Add Package"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("packages/all-packages/")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="View Packages"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummaryStyle}
          >
            <div>
              <ShopIcon className={classes.linkIconStyle} /> &nbsp; Messages
            </div>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.accordionDetails }}>
            <List
              className={classes.accordionDetailsList}
              component="div"
              disablePadding
            >
              <ListItem
                onClick={() => handleRouteChange("view-messages")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="All messages"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("view-messages/read")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Read messages"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("view-messages/unread")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Unread messages"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
            </List>
            {/* </div> */}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummaryStyle}
          >
            <div>
              <SupervisorAccountIcon className={classes.linkIconStyle} /> &nbsp;
              Staffs Management
            </div>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.accordionDetails }}>
            <List component="div" disablePadding>
              <ListItem
                onClick={() => handleRouteChange("add-staff")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Add Staff"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>

              <ListItem
                onClick={() => handleRouteChange("staffs")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Staffs"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        {/* <Divider /> */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummaryStyle}
          >
            <div>
              <SettingsIcon className={classes.linkIconStyle} /> &nbsp; Settings
            </div>
          </AccordionSummary>
          <AccordionDetails classes={{ root: classes.accordionDetails }}>
            <List component="div" disablePadding>
              <ListItem
                onClick={() => handleRouteChange("edit-account")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Edit Account"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("change-picture")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Change Picture"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                onClick={() => handleRouteChange("change-password")}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Change Password"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
              <ListItem
                //   onClick={() => dispatch(logOutUser())}
                button
                className={classes.nested}
              >
                <ListItemText
                  primary="Logout"
                  classes={{ primary: classes.nestedLink }}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Drawer>
      {/* ) : null} */}
      {props.children}
    </div>
  );
}

export default Header;
