import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import CheckBox from "./CheckBox/CheckBox";
import Container from "./Container/Container";
function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Container >
        <div>
        <Button gold={true} />

        </div>
        <CheckBox html="prueba" name="hola">
          Hola
        </CheckBox>
      </Container>
    </div>
  );
}

export default App;
