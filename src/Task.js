import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Task = ({ task, onClick, onToggle }) => {
  return (
    <div
      className={task.reminder ? "task reminder" : "task"}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes style={{ color: "red" }} onClick={() => onClick(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  onClick: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Task;
