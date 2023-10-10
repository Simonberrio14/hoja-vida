import { StaticImageData } from "next/image";
import { DialogSaberMas } from "@/components/dialogs/dialog-saber-mas";

interface InputProps {
  imagen: StaticImageData;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  href: string;
}

function ProyectoPortafolio({ imagen, titulo, descripcionCorta, descripcionLarga, href }: InputProps) {
  return (
    <div className="h-auto w-96 bg-white flex flex-col gap-3">
      <img className="h-80 pt-8" src={imagen.src} alt="Foto Proyecto" />
      <span className="pl-5">{titulo}</span>
      <span className="h-auto w-full px-5 text-sm text-gray-500">{descripcionCorta}</span>
      <DialogSaberMas titulo={titulo} descripcionLarga={descripcionLarga} href={href}></DialogSaberMas>
    </div>
  );
}

export { ProyectoPortafolio };