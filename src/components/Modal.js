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

  const newTask = () => {
    if (activeTask) {
      return { ...activeTask };
    } else {
      return { title: '', completed: false };
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
          <h3>{activeTask ? 'Editar tarea' : 'Nueva tarea'}</h3>
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