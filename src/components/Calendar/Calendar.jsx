import { useContext, useState } from "react";

import "./Calendar.css";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

import Cell from "../Cell/Cell";

import { formatDate, getCalendarDates } from "../../utils";

import { ACTION_TYPE, EventsContext, ModalContext } from "../../contexts";

const Calendar = () => {
  const { setIsCreateModal } = useContext(ModalContext);
  const { dispatch } = useContext(EventsContext);

  const [date, setDate] = useState(new Date());
  const [changeCalendarType, setChangeCalendarType] = useState("month");

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  //calendar change func
  const changeBtnHandler = (btnType) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = new Date().getDate();

    if (changeCalendarType === "month") {
      if (btnType === "prev") {
        setDate(new Date(year, month - 1, day));
      } else {
        setDate(new Date(year, month + 1, day));
      }
    } else {
      if (btnType === "prev") {
        setDate(new Date(year - 1, month, day));
      } else {
        setDate(new Date(year + 1, month, day));
      }
    }
  };

  //create event for today
  const createEventHandler = () => {
    dispatch({
      type: ACTION_TYPE.SET_SELECTED_DATE,
      payload: formatDate(new Date()),
    });
    setIsCreateModal(true);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button
          className="calendar__circle-btn calendar__circle-btn--create"
          data-info="Create Event"
          onClick={createEventHandler}
        >
          <IoMdAdd />
        </button>
        <button
          className="calendar__today-btn"
          onClick={() => setDate(new Date())}
        >
          Today
        </button>
        <select
          className="calendar__change-type"
          value={changeCalendarType}
          onChange={(e) => setChangeCalendarType(e.target.value)}
        >
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
        <div className="calendar__change-btns">
          <button
            className="calendar__circle-btn calendar__circle-btn--change"
            data-info={`Prev ${changeCalendarType}`}
            onClick={() => changeBtnHandler("prev")}
          >
            <GrFormPrevious />
          </button>
          <button
            className="calendar__circle-btn calendar__circle-btn--change"
            data-info={`Next ${changeCalendarType}`}
            onClick={() => changeBtnHandler("next")}
          >
            <GrFormNext />
          </button>
        </div>

        <div className="calendar__title">
          {date.toLocaleString("en-us", { month: "long" })} {date.getFullYear()}
        </div>
      </div>
      <div className="calendar__content">
        {weekDays.map((weekDay, i) => (
          <Cell key={i} cellContent={weekDay} />
        ))}
        {getCalendarDates(date)?.map((date, i) => (
          <Cell key={i} cellContent={date} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
