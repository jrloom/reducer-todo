import React, { useReducer, useState } from "react";
import { initialState, taskReducer } from "./reducers/taskReducers";
import { TaskContext } from "./contexts/TaskContext";
import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/List";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import "./App.scss";

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(3)
  }
}));

const App = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [task, setTask] = useState("");

  const handleChange = event => {
    setTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTask("");
    dispatch({
      type: "ADD_TASK",
      payload: task
    });
  };

  const completeTask = task => {
    dispatch({
      type: "COMPLETE",
      payload: task.id
    });
  };

  const clearComplete = event => {
    event.preventDefault();
    dispatch({ type: "CLEAR_COMPLETE" });
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper elevation={2} className={classes.root}>
        <Grid container direction="column" alignItems="center">
          <Header />
          <Box component="main">
            <TaskContext.Provider
              value={{
                task,
                handleChange,
                handleSubmit,
                clearComplete
              }}
            >
              <Form />
            </TaskContext.Provider>
            <TaskContext.Provider
              value={{
                state,
                completeTask
              }}
            >
              <TaskList />
            </TaskContext.Provider>
          </Box>
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
