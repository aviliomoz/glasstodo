import React, { useState } from 'react';
import moment from 'moment';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveDate } from '../redux/actions/dateActions';

moment.locale('es');

export const Calendar = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(moment());
  const { activeDate } = useSelector((state) => state.date);

  const handleNextMonth = () => {
    const newDate = date.clone().add(1, 'month');
    setDate(newDate);
  };

  const handlePreviousMonth = () => {
    const newDate = date.clone().subtract(1, 'month');
    setDate(newDate);
  };

  const dateList = (date) => {
    const list = [];

    const dateInfo = {
      month: date.format('MM'),
      year: date.format('YYYY'),
    };

    for (let i = 1; i < date.date(1).day(); i++) {
      list.push({
        ...dateInfo,
        id: Math.random() * Math.random(),
        day: '',
      });
    }

    for (let i = 1; i <= date.daysInMonth(); i++) {
      list.push({
        ...dateInfo,
        id: Math.random() * Math.random(),
        day: i,
      });
    }

    return list;
  };

  const generateFullDate = (date) => {
    return moment(`${date.year}-${date.month}-${date.day}`, 'YYYY-MM-DD');
  };

  const handleSubmitDate = (date) => {
    const fullDate = generateFullDate(date);
    dispatch(setActiveDate(fullDate.format('YYYY-MM-DD')));
  };

  const capitalize = (text) => {
    const capitalLetter = text.split('')[0].toUpperCase();
    return text.replace(text.split('')[0], capitalLetter);
  };

  const getDayClassName = (date) => {
    if (date.day === '') {
      return 'empty';
    }

    const fullDate = moment(
      `${date.year}-${date.month}-${date.day}`,
      'YYYY-MM-DD',
    ).format('YYYY-MM-DD');

    if (fullDate === moment(activeDate, 'YYYY-MM-DD').format('YYYY-MM-DD')) {
      return 'active';
    }

    if (fullDate === moment().format('YYYY-MM-DD')) {
      return 'today';
    }

    return 'number';
  };

  return (
    <div className="calendar">
      <section className="calendar-header">
        <h2>{`${capitalize(date.format('MMMM'))} ${date.format('YYYY')}`}</h2>
        <div className="calendar-header-arrows">
          <MdChevronLeft onClick={handlePreviousMonth} />
          <MdChevronRight onClick={handleNextMonth} />
        </div>
      </section>
      <section className="calendar-container">
        <div className="calendar-container-days">
          <div>Lu</div>
          <div>Ma</div>
          <div>Mi</div>
          <div>Ju</div>
          <div>Vi</div>
          <div>Sa</div>
          <div>Do</div>
        </div>
        <div className="calendar-container-numbers">
          {dateList(date).map((date) => {
            return (
              <div
                onClick={() => handleSubmitDate(date)}
                className={getDayClassName(date)}
                key={date.id}
              >
                {date.day}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
