import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../components/Task';
import { getTasks } from '../redux/actions/todoActions';

export const TasksList = () => {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.todo);
  const { uid } = useSelector((state) => state.auth);
  const { activeDate } = useSelector((state) => state.date);

  useEffect(() => {
    dispatch(getTasks(uid));
  }, [dispatch, uid]);

  return (
    <div className="tasks-list">
      <div className="tasks-list-container">
        {tasks
          .filter((task) => task.date === activeDate)
          .sort((a, b) => moment(a.time, 'h:mm a') - moment(b.time, 'h:mm a'))
          .map((task) => {
            return <Task key={task._id} task={task} />;
          })}
      </div>
    </div>
  );
};
