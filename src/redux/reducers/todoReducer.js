import { types } from '../types';

const initialState = {
  tasks: [],
  activeTask: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.todoGetTasks:
      return {
        ...state,
        tasks: action.payload,
      };

    case types.todoCreateTask:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case types.todoUpdateTask:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task,
        ),
      };

    case types.todoDeleteTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };

    case types.todoSetActiveTask:
      return {
        ...state,
        activeTask: action.payload,
      };

    case types.todoReset:
      return initialState;

    default:
      return state;
  }
};
