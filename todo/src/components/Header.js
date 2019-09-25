import React from "react";
import { Box, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box component="header">
      <Paper component="h1" elevation={0} className={classes.root}>
        Do Stuff
      </Paper>
    </Box>
  );
};

export default Header;
