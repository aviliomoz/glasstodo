import { useDispatch } from 'react-redux';
import {
  deleteTask,
  setActiveTask,
  updateTask,
} from '../redux/actions/todoActions';
import { openModal } from '../redux/actions/uiActions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setActiveTask(task));
    dispatch(openModal());
  };

  return (
    <div className="task">
      <section
        className={
          task.completed ? 'task-content task-completed' : 'task-content'
        }
      >
        {task.title}
      </section>
      <section className="task-options">
        <button
          onClick={() => dispatch(deleteTask(task))}
          className="task-options-delete material-icons"
        >
          close
        </button>
        <button
          onClick={handleOpenModal}
          className="task-options-update material-icons"
        >
          edit
        </button>
        <button
          onClick={() =>
            dispatch(
              updateTask({
                ...task,
                completed: !task.completed,
              }),
            )
          }
          className="task-options-completed material-icons"
        >
          done
        </button>
      </section>
    </div>
  );
};
