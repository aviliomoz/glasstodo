import { useDispatch } from 'react-redux';
import { MdCheck, MdClose } from 'react-icons/md';
import { deleteTask, updateTask } from '../redux/actions/todoActions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={task.completed ? 'task task-completed' : 'task'}>
      {!task.completed && (
        <button
          onClick={() => dispatch(deleteTask(task))}
          className="task-options-delete"
        >
          <MdClose />
        </button>
      )}
      <button
        className="task-options-completed"
        onClick={() =>
          dispatch(
            updateTask({
              ...task,
              completed: !task.completed,
            }),
          )
        }
      >
        {task.completed ? 'Activar' : 'Completar'}
      </button>
      <div className="task-time">{task.time}</div>
      {task.completed && (
        <div className="task-check">
          <MdCheck />
        </div>
      )}
      <section className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </section>
    </div>
  );
};
