import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

import TableMyBets from "./TableAllBets.jsx";
import TableAllBets from "./TableAllBets.jsx";
import TableResults from "./TableResults.jsx";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: "#000033",
    width: 500
  },

  tabs: {
    backgroundColor: "#000033",
    width: 500,
    position: "static"
  }
});

class InfoTable extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classNames(classes.root)}>
          <AppBar className={classNames(classes.tabs)}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab style={{ color: "#a6a6a6" }} label="My Bets" />
              <Tab style={{ color: "#a6a6a6" }} label="All Bets" />
              <Tab style={{ color: "#a6a6a6" }} label="Results" />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <TableMyBets />
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <TableAllBets />
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <TableResults />
            </TabContainer>
          </SwipeableViews>

          <div style={{ padding: "20px" }}>
            <Paper
              elevation={24}
              style={{ padding: "10px", backgroundColor: "#001340" }}
            >
              <Grid container spacing={40}>
                <Grid item> </Grid>
                <Grid item>
                  <Typography
                    style={{ color: "#a6a6a6", fontSize: 18 }}
                    variant="h5"
                  >
                    Blockdevteam
                  </Typography>
                </Grid>

                <Grid item> </Grid>

                <Grid item>
                  <Typography
                    style={{ color: "#a6a6a6", fontSize: 18 }}
                    variant="h6"
                  >
                    250 EOS
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Paper>
      </div>
    );
  }
}

InfoTable.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(InfoTable);
