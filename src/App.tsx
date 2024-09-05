import CheckBox from "./CheckBox/CheckBox";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <CheckBox html="hola" name="test" gold={true} type="radio">Hola</CheckBox>
      <CheckBox html="chau" name="test" gold={false} type="radio">chau</CheckBox>
      <CheckBox html="Adios" name="test" gold={true} type="radio">Adios</CheckBox>
    </div>
  );
}

export default App;
