import { createContext, useContext, useState } from "react";
import Toast from "../constants/Notification/Toast";
import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const updateLoggedIn = async (loggedIn) => {
    if (loggedIn) {
      try {
        const token = localStorage.getItem("token");
        await queryClient.fetchQuery({
          queryKey: ["token"],
          queryFn: () =>
            axios.get(
              "https://doodlecollab-backend.onrender.com/api/users/validateToken",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            ),
          staleTime: 0,
        });

        setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);
        localStorage.removeItem("token");
      }
    } else {
      setLoggedIn(false);
      localStorage.removeItem("token");
    }
  };

  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

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
