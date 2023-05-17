import { useContext } from "react";
import "./Modal.css";

import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

import { ACTION_TYPE, EventsContext, ModalContext } from "../../contexts";

const DisplayModal = () => {
  const { setIsDisplayModal, setIsCreateModal } = useContext(ModalContext);
  const { selectedDate, eventsList, dispatch } = useContext(EventsContext);

  const getEvent = () =>
    eventsList.filter(({ eventDate }) => eventDate === selectedDate)[0];

  // delete event
  const deleteHandler = () => {
    dispatch({
      type: ACTION_TYPE.DELETE_EVENT,
      payload: selectedDate,
    });
    setIsDisplayModal(false);
  };

  // edit event
  const editHandler = () => {
    dispatch({ type: ACTION_TYPE.SET_EDITED_EVENT, payload: getEvent() });
    deleteHandler();
    setIsCreateModal(true);
  };

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__btn-container">
          <div className="modal__btn" onClick={editHandler}>
            <RiEdit2Line />
          </div>
          <div
            className="modal__btn modal__btn--delete"
            onClick={deleteHandler}
          >
            <RiDeleteBin6Line />
          </div>

          <div
            className="modal__btn modal__btn--close"
            onClick={() => setIsDisplayModal(false)}
          >
            <RxCross2 />
          </div>
        </div>

        <div className="modal__event">{getEvent()?.event}</div>
        <div className="modal__date modal__date--event">{selectedDate}</div>
      </div>
    </div>
  );
};

export default DisplayModal;
