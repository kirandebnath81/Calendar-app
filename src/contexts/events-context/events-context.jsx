import { createContext, useReducer } from "react";

import PropTypes from "prop-types";

import EventsReducer from "./reducer";

//context
export const EventsContext = createContext();

//state
const initialState = {
  selectedDate: "",
  eventsList: [],
  editedEvent: {},
};

//provider
export const EventsProvider = ({ children }) => {
  const [events, dispatch] = useReducer(EventsReducer, initialState);
  const { selectedDate, eventsList, editedEvent } = events;
  return (
    <EventsContext.Provider
      value={{ selectedDate, eventsList, editedEvent, dispatch }}
    >
      {children}
    </EventsContext.Provider>
  );
};

EventsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
