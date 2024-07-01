import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

// Initial state
const initialState = {
  tasks: [],
};

// Root reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Add new task
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
      };
    case DELETE_TASK:
      // Delete task by id
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      // Edit task by id
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
        ),
      };
    case TOGGLE_TASK:
      // Toggle task completion status
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
