import React, { useEffect } from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import moment from 'moment';
import { TasksForm } from './TasksForm';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveDate } from '../redux/actions/dateActions';
import { logout } from '../redux/actions/authActions';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const { activeDate } = useSelector((state) => state.date);
  const { username } = useSelector((state) => state.auth);

  useEffect(() => {
    activeDate === '' && dispatch(setActiveDate(moment().format('YYYY-MM-DD')));
  }, [dispatch, activeDate]);

  return (
    <div className="layout">
      <section className="layout-tasks">
        <div className="layout-tasks-header">
          <div className="layout-tasks-header-top">
            <h1>Tareas</h1>
            <div className="layout-tasks-header-top-user">
              <h3>{username}</h3>
              <HiOutlineLogout onClick={() => dispatch(logout())} />
            </div>
          </div>
          <p>{`${moment(activeDate).format('dddd')} ${moment(activeDate).format(
            'DD',
          )} de ${moment(activeDate).format('MMMM')}`}</p>
        </div>
        <div className="layout-tasks-container">{children}</div>
      </section>
      <section className="layout-calendar">
        <TasksForm />
      </section>
    </div>
  );
};
