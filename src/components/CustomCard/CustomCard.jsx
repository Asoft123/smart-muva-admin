import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  dashboardCard: {
    display: "block",
    height: "104px",
    width: "255px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 12px rgba(10, 2, 13, 0.04)",
    border: "none",
    borderRadius: "4px",
  },
  title: {
    fontWeight: 600,
    color: "#FFB11A",
    fontSize: "1.5rem",
    textAlign: "left",
    marginBottom: ".5rem",
  },
  iconBox: {
    display: "flex",
    height: "80px",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconStyle: {
    width: "40px",
    height: "40px",
    color: "#707070",
  },
  iconContainer:{

   width: "65px",
   height: "65px",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   borderRadius: "50%",
   backgroundColor:`rgba(255, 177, 26, 0.2)`,

  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

function CustomCard(props) {
  const { title, count, icon } = props;
  const classes = useStyles(props);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
      <Card className={classes.dashboardCard} variant="outlined">
        <CardContent >
          <Box className={classes.dashboardCardBox}>
            <Box className={classes.iconBox}>
              {icon && (
                <Box className={classes.iconContainer}>
                  <img className={classes.iconStyle} src={icon} alt={title} />
                </Box>
              )}
              <div className="textContainer">
                <NumberFormat
                  value={count}
                  displayType={"text"}
                  thousandSeparator={true}
                  renderText={(value) => (
                    <Typography
                      className={classes.title}
                      variant="h4"
                      align="center"
                      component="h2"
                    >
                      {value}
                    </Typography>
                  )}
                />
                <Typography variant="body1" component="span">
                  {title}
                </Typography>
              </div>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default CustomCard;
