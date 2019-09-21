import React, { useReducer, useState } from "react";
import { initialState, taskReducer } from "./reducers/taskReducers";
import { TaskContext } from "./contexts/TaskContext";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

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

  return (
    <div>
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
        <List />
      </TaskContext.Provider>
    </div>
  );
};

export default App;
