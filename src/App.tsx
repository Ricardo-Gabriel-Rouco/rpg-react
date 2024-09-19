import { useState } from "react";
// import Armor from "./Icons/Icons"
import List from "./List/List";
import "./App.css";

type Option = {
  label: string;
  value: string;
};


function App() {
  const [selectedOption, setSelectedOption] = useState<Option>({
    label: "Option 1",
    value: "option1",
  });

  // Definir el listado de opciones
  const options: Option[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
    { label: "Option 6", value: "option6" },
    { label: "Option 7", value: "option7" },
  ];

  // Manejador de opciones
  const handleOptionChange = (value: string) => {
    const selected = options.find((option) => option.value === value);
    if (selected) {
      setSelectedOption(selected); // Actualiza el estado con la nueva opción seleccionada
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <List options={options} optionHandler={handleOptionChange} selectedValue={selectedOption}/>
    </div>
  );
}

export default App;
