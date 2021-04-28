import { types } from '../types';
import { fetchWithToken } from '../../utils/fetch';

export const getTasks = (uid) => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken(`/tasks/${uid}`);
      const data = await res.json();

      if (data.ok) {
        dispatch({
          type: types.todoGetTasks,
          payload: data.tasks,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const createTask = (task) => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken('/tasks', 'POST', task);
      const data = await res.json();

      if (data.ok) {
        dispatch({
          type: types.todoCreateTask,
          payload: data.task,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateTask = (task) => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken(`/tasks/${task._id}`, 'PUT', task);
      const data = await res.json();

      if (data.ok) {
        dispatch({
          type: types.todoUpdateTask,
          payload: data.task,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTask = (task) => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken(`/tasks/${task._id}`, 'DELETE', task);
      const data = await res.json();

      if (data.ok) {
        dispatch({
          type: types.todoDeleteTask,
          payload: data.task,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};
