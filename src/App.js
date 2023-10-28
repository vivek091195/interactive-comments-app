import "./App.css";
import { AppProvider } from "./hooks/useApp";
import { DisplayComments } from "./components/comment/DisplayComments";

function App() {
  return (
    <AppProvider>
      <DisplayComments />
    </AppProvider>
  );
}

export default App;
