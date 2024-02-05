import {
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AppContextProvider } from "./context/AppContext";
import { router } from "./routes/Root";

function App() {
  return (
    <ThemeProvider>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
