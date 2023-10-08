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
      <div className="flex flex-col w-4/12 justify-items-center">
        <span className="pt-10 pb-4 px-10">{institucion}</span>
        <div className="flex gap-10 pl-10 pr-10 pb-10 justify-between">
          <span className="text-sm">{cargo}</span>
          <span className="text-xs bg-green-300">{fechas}</span>
        </div>
      </div>
      <div className="flex flex-col w-8/12">
        <span className="pt-10 pb-4">{tituloObtenido}</span>
        <span>{descripcion}</span>
      </div>
    </div>
  );
}

export { Educacion };