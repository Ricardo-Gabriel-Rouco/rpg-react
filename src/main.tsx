// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // aquí debería estar incluido Tailwind

import Button from "./Button/Button";
import CheckBox from "./CheckBox/CheckBox";
import Container from "./Container/Container";

function App() {
  return (
    <div className="p-10 space-y-10 bg-gray-50 min-h-screen text-gray-900">
      <h1 className="text-3xl font-bold">Catálogo de Componentes</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Button</h2>
        <div className="space-x-4">
          <Button>Normal</Button>
          <Button gold>Gold</Button>
          <Button disabled>Deshabilitado</Button>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">CheckBox</h2>
        <CheckBox name="aceptar" label="Aceptar términos" />
        <CheckBox name="especial" label="Modo dorado" gold />
        <CheckBox name="off" label="Deshabilitado" disabled />
        <CheckBox type="radio" name="grupo1" label="Opción 1" />
        <CheckBox type="radio" name="grupo1" label="Opción 2" gold />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Container</h2>
        <Container type="framed">
          <p>Esto es un contenedor con marco clásico.</p>
        </Container>
        <Container type="golden">
          <p>Contenedor dorado para contenido especial.</p>
        </Container>
        <Container type="shinny">
          <p>Contenedor brillante (versión 2).</p>
        </Container>
        <Container type="grey">
          <p>Contenedor gris más sobrio.</p>
        </Container>
      </section>
      {/*
      <section>
        <h2 className="text-xl font-semibold mb-2">Dropdown</h2>
        <Dropdown options={["Opción 1", "Opción 2", "Opción 3"]} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Hr</h2>
        <Hr />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Icons</h2>
        <Icons name="star" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Input</h2>
        <Input placeholder="Escribe algo..." />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">List</h2>
        <List items={["Elemento 1", "Elemento 2", "Elemento 3"]} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Progress</h2>
        <Progress value={60} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Slider</h2>
        <Slider min={0} max={100} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Text</h2>
        <Text>Este es un componente de texto.</Text>
      </section>
*/}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
