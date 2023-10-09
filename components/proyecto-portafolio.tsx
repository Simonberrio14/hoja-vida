import { StaticImageData } from "next/image";

interface InputProps {
  imagen: StaticImageData;
  titulo: string;
  descripcion: string;
}

function ProyectoPortafolio({ imagen, titulo, descripcion }: InputProps) {
  return (
    <div className="h-auto w-80 bg-white flex flex-col gap-3">
      <img className="h-80 pt-8" src={imagen.src} alt="Foto Proyecto" />
      <span className="pl-5">{titulo}</span>
      <span className="px-5 pb-8 text-sm text-gray-500">{descripcion}</span>
    </div>
  );
}

export { ProyectoPortafolio };