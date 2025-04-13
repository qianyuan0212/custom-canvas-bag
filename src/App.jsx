import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import "@mantine/core/styles.css";
import { theme } from "./theme";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <HomePage />
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
