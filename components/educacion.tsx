interface InputProps {
  institucion: string;
  cargo: string
  fechas: string;
  tituloObtenido: string;
  descripcion: string;
}

function Educacion({ institucion, cargo, fechas, tituloObtenido, descripcion }: InputProps) {
  return (
    <div className="w-full flex">
      <div className="flex flex-col w-5/12 justify-items-center">
        <span className="pt-10 pb-4 px-10">{institucion}</span>
        <div className="flex gap-24 pb-10">
          <span className="text-sm pl-10">{cargo}</span>
          <span className="text-xs bg-green-300">{fechas}</span>
        </div>
      </div>
      <div className="flex flex-col w7/10">
        <span className="pt-10 pb-4">{tituloObtenido}</span>
        <span>{descripcion}</span>
      </div>
    </div>
  );
}

export { Educacion };