import { ACTION_TYPE } from "./actions";

const EventsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };
    case ACTION_TYPE.SET_EVENT:
      return { ...state, eventsList: [...state.eventsList, action.payload] };
    case ACTION_TYPE.SET_EDITED_EVENT:
      return { ...state, editedEvent: action.payload };
    case ACTION_TYPE.DELETE_EVENT:
      return {
        ...state,
        eventsList: state.eventsList.filter(
          ({ eventDate }) => eventDate !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default EventsReducer;
