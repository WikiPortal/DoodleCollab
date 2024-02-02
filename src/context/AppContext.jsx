import React, { createContext, useContext, useState } from "react";
import Toast from "../constants/Notification/Toast";
import axios from "axios";

const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const updateLoggedIn = (value) => {
    if(value){
      const token = localStorage.getItem("token");
      axios
        .get(
          "https://doodlecollab-backend.onrender.com/api/users/validateToken",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log("TOKEN SET");
          setLoggedIn(true);
        })
        .catch((error) => {
          setLoggedIn(false);
          localStorage.removeItem("token");
        });
    } else {
      setLoggedIn(false);
      localStorage.removeItem("token");
    }
  }

  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

  const isError = false;

  return (
    <AppContext.Provider
      value={{
        showToast,
        updateLoggedIn,
        isLoggedIn
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
