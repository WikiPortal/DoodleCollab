import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { error, isLoading } = useQuery({
    queryKey: ["token"],
    queryFn: () =>
      axios.get(`${apiUrl}/api/users/validateToken`, {
        headers: {
          Authorization: `Bearer ${
            localStorage && localStorage.getItem("token")
          }`,
        },
      }),
    enabled: !!localStorage,
  });

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (error) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
