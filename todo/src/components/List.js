import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const List = () => {
  const list = useContext(TaskContext);

  return (
    <div>
      {list.state.map(task => {
        return (
          <div key={task.id} onClick={() => list.completeTask(task)}>
            <div className={`task${task.completed ? " complete" : ""}`}>{task.item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
