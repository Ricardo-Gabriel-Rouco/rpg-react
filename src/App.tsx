import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import CheckBox from "./CheckBox/CheckBox";
import Container from "./Container/Container";
import List from "./List/List";
import { Option } from "./specialTypes";


const options = [
  {label: "vagabond", value:"vagabond"}
]

function App() {
  const [option, setOptions] = useState<Option>(options[0])

  const selectOption = (value: Option) => {
    setOptions(value)
  } 

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Container >
        <div>
        <Button gold={true} />

        </div>
        <List optionHandler={selectOption} options={options} selectedValue={option}></List>

        <CheckBox html="prueba" name="hola">
          Hola
        </CheckBox>
      </Container>
    </div>
  );
}

export default App;
