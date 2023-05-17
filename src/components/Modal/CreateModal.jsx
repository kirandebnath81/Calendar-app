import { useContext, useState } from "react";

import "./Modal.css";

import { RxCross2 } from "react-icons/rx";

import { ACTION_TYPE, EventsContext, ModalContext } from "../../contexts";

const CreateModal = () => {
  const { setIsCreateModal } = useContext(ModalContext);
  const { selectedDate, editedEvent, dispatch } = useContext(EventsContext);
  const [inputValue, setInputValue] = useState(editedEvent?.event || "");

  // save event func
  const saveHandler = () => {
    dispatch({
      type: ACTION_TYPE.SET_EVENT,
      payload: { eventDate: selectedDate, event: inputValue },
    });
    setIsCreateModal(false);
  };

  //close modal func
  const closeBtnHandler = () => {
    setIsCreateModal(false);
    dispatch({ type: ACTION_TYPE.SET_EDITED_EVENT, payload: null });
  };

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__btn-container">
          <div
            className="modal__btn modal__btn--close"
            onClick={closeBtnHandler}
          >
            <RxCross2 />
          </div>
        </div>

        <input
          className="modal__input"
          type="text"
          value={inputValue}
          placeholder="Event Title"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="modal__date">{selectedDate}</div>
        <div className="modal__btn-container">
          <button
            className={`modal__save-btn ${
              !inputValue && "modal__save-btn--disable"
            }`}
            onClick={saveHandler}
          >
            {editedEvent ? "Save" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
