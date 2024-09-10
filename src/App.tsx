import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";
import "./App.css";

function App() {
  const test = ["warrior", "vagabond", "prophet", "samurai"]
  const [selected, setSelected] = useState("warrior")

  const handleSelect = (e:any) => {
    setSelected(e.target.value)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Dropdown nameFor="warriorClasses" values={test} selectedOption={selected} onChangeOption={handleSelect}></Dropdown>
    </div>
  );
}

export default App;
