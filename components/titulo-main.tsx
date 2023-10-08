interface InputProps {
  texto: string;
}

function TituloMain(texto: InputProps) {
  return (
    <div className="w-full flex justify-items-center">
      <span className="w-full my-4 text-3xl text-center">{texto.texto}</span>
    </div>
  );
}

export { TituloMain };