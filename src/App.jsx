import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AppContextProvider } from "./context/AppContext";
import { router } from "./routes/Root";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
