import { createContext, useContext, useEffect, useState } from "react";
import Toast from "../constants/Notification/Toast";

const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoggedIn = async (logInState) => {
    if (!logInState) {
      localStorage.removeItem("token");
    }
    setIsLoggedIn(logInState);
  };

  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("token") ? true : false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        showToast,
        updateLoggedIn,
        isLoggedIn,
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
