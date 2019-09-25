import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const TaskList = () => {
  const taskList = useContext(TaskContext);
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.root}>
      <List direction="column">
        {taskList.state.map(task => {
          return (
            <Paper key={task.id} onClick={() => taskList.completeTask(task)} elevation={1} className="task">
              <ListItem>
                <ListItemText primary={task.item} className="task__text" />
                <ListItemIcon>
                  <CheckCircle className={`task__check--hide${task.completed ? " task__check--show" : ""}`} />
                </ListItemIcon>
              </ListItem>
            </Paper>
          );
        })}
      </List>
    </Paper>
  );
};

export default TaskList;
