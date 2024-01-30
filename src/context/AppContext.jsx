import React, { createContext, useContext, useState } from "react";
import Toast from "../constants/Notification/Toast";

const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);

  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

  const isError = false;

  return (
    <AppContext.Provider
      value={{
        showToast,
        isLoggedIn: !isError,
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { AppContextProvider, useAppContext };
