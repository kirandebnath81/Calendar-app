import { useContext } from "react";

import "./Cell.css";

import PropTypes from "prop-types";

//context
import { EventsContext, ModalContext } from "../../contexts";
import { ACTION_TYPE } from "../../contexts";

import { formatDate } from "../../utils";

const Cell = ({ cellContent }) => {
  const { setIsCreateModal, setIsDisplayModal } = useContext(ModalContext);
  const { eventsList, dispatch } = useContext(EventsContext);

  const today = new Date().toDateString();
  const isDate = typeof cellContent === "object";

  // get specific event
  const getEvent = () => {
    if (!isDate) return;

    let events = eventsList.filter(
      ({ eventDate }) => eventDate === formatDate(cellContent)
    );

    return events && events[0]?.event;
  };

  const modalHandler = () => {
    if (!isDate) return;

    dispatch({
      type: ACTION_TYPE.SET_SELECTED_DATE,
      payload: formatDate(cellContent),
    });

    if (getEvent()) {
      setIsDisplayModal(true);
    } else {
      setIsCreateModal(true);
    }
  };

  return (
    <div className="cell">
      <div
        onClick={modalHandler}
        className={`
        cell__content ${isDate && "cell__content--date"} 
        ${
          isDate &&
          cellContent.toDateString() === today &&
          "cell__content--highlight"
        }`}
      >
        {isDate ? cellContent.getDate() : cellContent}
      </div>

      {getEvent() && (
        <div className="cell__event" onClick={modalHandler}>
          <div className="cell__event-text">{getEvent()}</div>
        </div>
      )}
    </div>
  );
};

Cell.propTypes = {
  cellContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Cell;
