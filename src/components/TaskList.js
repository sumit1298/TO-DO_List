import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

// Component for displaying list of tasks
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEdit = (id, text) => {
    const newText = prompt('Edit Task', text);
    if (newText !== null) {
      dispatch(editTask(id, newText));
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span className={`task-text ${task.completed ? 'task-completed' : ''}`}>
            {task.text}
          </span>
          <div className="task-buttons">
            <button onClick={() => handleToggle(task.id)}>Toggle</button>
            <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
