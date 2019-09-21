import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Box, Button, Grid, InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  spacing: {
    marginBottom: theme.spacing(2)
  }
}));

const Form = () => {
  const form = useContext(TaskContext);
  const classes = useStyles();

  return (
    <Box>
      <Grid component="form" container direction="column" onSubmit={event => form.handleSubmit(event)}>
        <TextField
          className={classes.spacing}
          type="text"
          value={form.task}
          onChange={event => form.handleChange(event)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Edit />
              </InputAdornment>
            )
          }}
        />
        <Grid item>
          <Grid className={classes.spacing} container justify="space-around">
            <Button color="primary" variant="outlined" type="submit">
              Add
            </Button>
            <Button color="secondary" variant="outlined" type="button" onClick={event => form.clearComplete(event)}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
