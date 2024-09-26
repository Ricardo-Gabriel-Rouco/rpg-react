// import Armor from "./Icons/Icons"
import "./App.css";
import Progress from "./Progress/Progress";

function App() {

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Progress max={10} value={8}/>
    </div>
  );
}

export default App;
