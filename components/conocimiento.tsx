import { DiBootstrap } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiNetmagazine } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";
import { CgScreen } from "react-icons/cg";

interface InputProps {
  icono: string;
  titulo: string;
  texto: string;
}

function Conocimiento({ icono, titulo, texto }: InputProps) {
  return (
    <div className="flex flex-col h-60 w-1/3 justify-items-center gap-3 bg-white">
      <div className="w-full flex pt-5">
        {icono === 'Bootstrap' ? <DiBootstrap className="w-24 h-20 mx-36 border border-green-300 rounded-2xl"></DiBootstrap> : null}
        {icono === 'Angular' ? <DiAngularSimple className="w-24 h-20 mx-36 border border-green-300 rounded-2xl"></DiAngularSimple> : null}
        {icono === 'Android' ? <DiAndroid className="w-24 h-20 mx-36 border border-green-300 rounded-2xl"></DiAndroid> : null}
        {icono === 'Net' ? <DiNetmagazine className="w-24 h-20 mx-36 border border-green-300 rounded-2xl"></DiNetmagazine> : null}
        {icono === 'MsqlServer' ? <DiMsqlServer className="w-24 h-20 mx-36 border border-green-300 rounded-2xl"></DiMsqlServer> : null}
        {icono === 'Screen' ? <CgScreen className="w-24 h-20 mx-36 border border-green-300 rounded-2xl"></CgScreen> : null}
      </div>
      <span className="text-center">{titulo}</span>
      <span className="px-5 text-sm text-center text-gray-500">{texto}</span>
    </div>
  );
}

export { Conocimiento };