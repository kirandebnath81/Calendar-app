import { useContext } from "react";

import "./App.css";

import Calendar from "./components/Calendar/Calendar";
import { CreateModal, DisplayModal } from "./components/Modal";

import { ModalContext } from "./contexts";

const App = () => {
  const { isCreateModal, isDisplayModal } = useContext(ModalContext);
  return (
    <div className="app">
      {isCreateModal && <CreateModal />}
      {isDisplayModal && <DisplayModal />}
      <Calendar />
    </div>
  );
};

export default App;
