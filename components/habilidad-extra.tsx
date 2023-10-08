import { SiAndela } from "react-icons/si";

interface InputProps {
  texto: string;
}

function HabilidadExtra(texto: InputProps) {
  return (<div className="flex gap-2 justify-items-center">
    <SiAndela></SiAndela>
    <span className="text-sm">{texto.texto}</span>
  </div>
  );
}

export { HabilidadExtra };