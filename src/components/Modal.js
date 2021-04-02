import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import {
  createTask,
  setActiveTask,
  updateTask,
} from '../redux/actions/todoActions';
import { closeModal } from '../redux/actions/uiActions';

export const Modal = () => {
  const dispatch = useDispatch();
  const { activeTask } = useSelector((state) => state.todo);
  const { uid } = useSelector((state) => state.auth);

  const newTask = () => {
    if (activeTask) {
      return { ...activeTask };
    } else {
      return { title: '', completed: false, user: uid };
    }
  };

  const [taskInputValue, handleInputChange] = useForm(newTask());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTask) {
      dispatch(updateTask(taskInputValue));
    } else {
      dispatch(createTask(taskInputValue));
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    dispatch(setActiveTask(null));
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="modal-content-form">
          <h2>{activeTask ? 'Editar tarea' : 'Nueva tarea'}</h2>
          <input
            value={taskInputValue.title}
            onChange={handleInputChange}
            name="title"
            autoComplete="off"
          />
          <div className="form-options">
            <button
              type="button"
              onClick={handleCloseModal}
              className="form-options-cancel"
            >
              Cancelar
            </button>
            <button type="submit" className="form-options-save">
              {activeTask ? 'Editar' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
