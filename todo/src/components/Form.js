import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Form = () => {
  const form = useContext(TaskContext);

  return (
    <div>
      <form onSubmit={event => form.handleSubmit(event)}>
        <input type="text" value={form.task} onChange={event => form.handleChange(event)} />
        <button type="submit">Add Task</button>
        <button type="button" onClick={event => form.clearComplete(event)}>
          Clear Completed
        </button>
      </form>
    </div>
  );
};

export default Form;
