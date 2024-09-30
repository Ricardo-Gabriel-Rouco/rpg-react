import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import CheckBox from "./CheckBox/CheckBox";
import Container from "./Container/Container";
import Dropdown from "./Dropdown/Dropdown";

const options = [
  "1",
  "2",
  "3"
]

function App() {
  const [option, setOptions] = useState<string>("")

  const selectOption = (value: string) => {
    setOptions(value)
  } 

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Container >
        <div>
        <Button gold={true} />

        </div>
        <Dropdown values={options} onChangeOption={selectOption} selectedOption={option} ></Dropdown>

        <CheckBox html="prueba" name="hola">
          Hola
        </CheckBox>
      </Container>
    </div>
  );
}

export default App;
