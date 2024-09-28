import { useState } from "react";
import "./App.css";
import Slider from "./Sliders/Sliders";

function App() {
  const [value, setValue] = useState<number>(1);

  const handleChange = (e: any) => {
    console.log(e.target.value)
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Slider max={10} min={0} onChange={handleChange} value={value} step={1} golden={true} />
    </div>
  );
}

export default App;
