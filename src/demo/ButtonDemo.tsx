import Button from "../Button/Button";

export default function ButtonDemo() {
  return (
    <div className="p-10 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Pruebas de Button</h1>

      <div className="space-x-4">
        <Button>Normal</Button>
        <Button gold>Botón Dorado</Button>
        <Button disabled>Desactivado</Button>
        <Button gold disabled>
          Dorado Desactivado
        </Button>
      </div>
    </div>
  );
}
