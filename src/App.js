import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MainScreen from "./components/main-screen";
import pattern from "./assets/icons/pattern.svg";

function App() {
  return (
    <div
      className="bg-repeat h-screen w-screen"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <DndProvider backend={HTML5Backend}>
        <MainScreen />
      </DndProvider>
    </div>
  );
}

export default App;
