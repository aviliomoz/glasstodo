import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../components/Task';
import { getTasks } from '../redux/actions/todoActions';

export const Home = () => {
  const { tasks } = useSelector((state) => state.todo);
  const { activeFilter } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const renderTasksByFilter = () => {
    switch (activeFilter) {
      case 'all':
        return tasks;
      case 'pending':
        return tasks.filter((task) => !task.completed);
      case 'done':
        return tasks.filter((task) => task.completed);
      default:
        return;
    }
  };

  return (
    <div className="home">
      {renderTasksByFilter().map((task) => {
        return <Task key={task._id} task={task} />;
      })}
    </div>
  );
};
