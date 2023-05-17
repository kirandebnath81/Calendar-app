import { createContext, useState } from "react";

import PropTypes from "prop-types";

//context
export const ModalContext = createContext();

//provider
export const ModalProvider = ({ children }) => {
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isDisplayModal, setIsDisplayModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        isCreateModal,
        setIsCreateModal,
        isDisplayModal,
        setIsDisplayModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
