import { DiBootstrap } from "react-icons/di";

interface InputProps {
  icono: string;
  titulo: string;
  texto: string;
}

function Conocimiento({ icono, titulo, texto }: InputProps) {
  return (
    <div className=" flex flex-col w-1/3 justify-items-center gap-3 bg-white">
      <div className="w-full flex">
        {icono === 'Bootstrap' ? <DiBootstrap className="w-24 h-24 color-green-300 ml-36"></DiBootstrap> : null}
      </div>
      <span className="text-center">{titulo}</span>
      <span className="text-sm text-center">{texto}</span>
    </div>
  );
}

export { Conocimiento };