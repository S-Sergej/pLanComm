import React from "react";
import { Link } from "react-router-dom";

const TaskList = props => {
  return (
    <div>
      {props.tasks.length > 0 && <h2>Tasks:</h2>}
      {props.tasks.map(task => {
        return (
          <div key={task._id}>
            <Link to={`/tasks/${task._id}`}>
              <h3>{task.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
