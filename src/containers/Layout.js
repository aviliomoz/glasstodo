import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../components/Modal';
import { logout } from '../redux/actions/authActions';
import { openModal, setActiveFilter } from '../redux/actions/uiActions';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const { activeFilter, modalIsOpen } = useSelector((state) => state.ui);
  const { username } = useSelector((state) => state.auth);

  const verifyActiveFilterClassName = (filterName) => {
    if (filterName === activeFilter) {
      return 'layout-header-nav-button active';
    } else {
      return 'layout-header-nav-button';
    }
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-header-top">
          <h1>Tareas</h1>
          <div className="layout-header-top-user">
            <span>{username}</span>
            <i onClick={() => dispatch(logout())} className="material-icons">
              logout
            </i>
          </div>
        </div>
        <nav className="layout-header-nav">
          <button
            onClick={(e) => dispatch(setActiveFilter(e.target.id))}
            id="all"
            className={verifyActiveFilterClassName('all')}
          >
            Todas
          </button>
          <button
            onClick={(e) => dispatch(setActiveFilter(e.target.id))}
            id="pending"
            className={verifyActiveFilterClassName('pending')}
          >
            Pendientes
          </button>
          <button
            onClick={(e) => dispatch(setActiveFilter(e.target.id))}
            id="done"
            className={verifyActiveFilterClassName('done')}
          >
            Completadas
          </button>
        </nav>
      </header>
      <main className="layout-main">
        {children}
        <button
          onClick={() => dispatch(openModal())}
          className="add-task-button"
        >
          +
        </button>
      </main>
      <footer className="layout-footer"></footer>
      {modalIsOpen && <Modal />}
    </div>
  );
};
