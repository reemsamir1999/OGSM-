import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MainScreen from "./components/main-screen";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MainScreen />
    </DndProvider>
  );
}

export default App;
