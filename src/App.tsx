import { useState } from "react";
import Button from "./Button/Button";
import "./App.css";
import CheckBox from "./CheckBox/CheckBox";

function App() {


  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Button gold={true} />
      <CheckBox html="prueba" name="hola">Hola</CheckBox>
    </div>
  );
}

export default App;
