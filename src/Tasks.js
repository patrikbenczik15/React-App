import Task from "./Task";
import PropTypes from "prop-types";

const Tasks = ({ tasks, onClick, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onClick={onClick}
          onToggle={onToggle}
        ></Task>
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onClick: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Tasks;
