interface InputProps {
  idioma: string;
  porcentaje: number;
}

function BarraProgreso({ idioma, porcentaje }: InputProps) {
  return (<div>
    <div className="flex w-full justify-between">
      <span className="text-xs">{idioma}</span>
      <span className="text-xs">{porcentaje}%</span>
    </div>
    <div className="border border-green-300 rounded-full">
      <div className="h-1 bg-green-300" style={{ width: `${porcentaje}%` }}></div>
    </div>
  </div>
  );
}

export { BarraProgreso };