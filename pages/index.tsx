import { BarraProgreso } from "@/components/barra-progreso";
import { Conocimiento } from "@/components/conocimiento";
import { Educacion } from "@/components/educacion";
import { HabilidadExtra } from "@/components/habilidad-extra";
import { RedSocial } from "@/components/red-social";
import { SeparadorMain } from "@/components/separador-main"
import { TituloMain } from "@/components/titulo-main";
import perfil from "../media/foto-perfil.jpg";
import fotoCompleta from "../media/foto-completa.jpg";

const Home = () => {
  return (
    <div className="h-full w-full flex bg-zinc-200">
      <aside className="h-full w-2/12 bg-white py-1 px-5 flex flex-col">
        <section>
          <div className="flex flex-col items-center py-1 px-1">
            <img className="w-36 h-36 rounded-full" src={perfil.src} alt="Foto de Perfil"></img>
            <span className="text-lg font-semibold">Simón Berrio</span>
            <span className="text-gray-500">Desarrollador Fullstack</span>
          </div>
        </section>
        <hr />
        <section>
          <div className="flex flex-col items-center py-1 px-1">
            <div className="flex w-full justify-between">
              <span className="text-sm">Edad:</span>
              <span className="text-sm">23</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-sm">Teléfono:</span>
              <span className="text-sm">3165220154</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-sm">Email:</span>
              <span className="text-sm">simon.b5@hotmail.com</span>
            </div>
            <div className="flex w-full justify-between">
              <span className="text-sm">Ciudad:</span>
              <span className="text-sm">Medellín-Antioquia</span>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="flex flex-col py-1 px-1">
            <span>Idiomas</span>
            <BarraProgreso idioma="Español" porcentaje={100}></BarraProgreso>
            <BarraProgreso idioma="Inglés" porcentaje={70}></BarraProgreso>
          </div>
        </section>
        <hr />
        <section>
          <div className="flex flex-col py-1 px-1">
            <span>Lenguajes de Programación</span>
            <BarraProgreso idioma="C#" porcentaje={100}></BarraProgreso>
            <BarraProgreso idioma="Java" porcentaje={90}></BarraProgreso>
            <BarraProgreso idioma="JavaScript" porcentaje={100}></BarraProgreso>
            <BarraProgreso idioma="PowerBuilder" porcentaje={90}></BarraProgreso>
            <BarraProgreso idioma="Python" porcentaje={50}></BarraProgreso>
            <BarraProgreso idioma="R" porcentaje={40}></BarraProgreso>
            <BarraProgreso idioma="TypeScript" porcentaje={100}></BarraProgreso>
          </div>
        </section>
        <hr />
        <section>
          <div className="flex flex-col py-1 px-1">
            <span>Habilidades extra</span>
            <HabilidadExtra texto=".Net Core/Spring Boot"></HabilidadExtra>
            <HabilidadExtra texto="Angular/React Js"></HabilidadExtra>
            <HabilidadExtra texto="Bootstrap/Tailwind/Sass"></HabilidadExtra>
            <HabilidadExtra texto="SQL Server/MySQL/Oracle"></HabilidadExtra>
            <HabilidadExtra texto="Android Studio"></HabilidadExtra>
          </div>
        </section>
      </aside>
      <main className="w-9/12 bg-white mx-7">
        <section className="h-auto w-full flex gap-40">
          <div className="w-2/3 flex flex-col gap-1 justify-items-center">
            <span className="w-full mt-4 text-3xl text-center">Hola! Soy Simón Berrio</span>
            <span className="w-full mt-4 text-3xl text-center text-green-300"> Desarrollador Fullstack</span>
            <p className="w-full my-4 text-lg text-center">
              Me considero una persona responsable, dinámica, con deseos de superación personal. Aprendo de manera rápida y asertiva con el fin de cumplir con puntualidad, honestidad y responsabilidad las distintas actividades que me son asignadas y para las cuales soy contratado.
            </p>
          </div>
          <div className="w-1/3">
            <img className="w-64 h-64" src={fotoCompleta.src} alt="Foto Completa"></img>
          </div>
        </section>
        <SeparadorMain></SeparadorMain>
        <section className="h-auto w-full bg-zinc-200">
          <div className="h-auto w-full bg-zinc-200">
            <TituloMain texto="Conocimientos"></TituloMain>
            <div className="flex flex-col bg-zinc-200 gap-5">
              <div className="h-52 w-full flex gap-5">
                <Conocimiento icono="Bootstrap" titulo="Backend" texto="Alguna mierda aquí pa probar"></Conocimiento>
                <Conocimiento icono="" titulo="Backend" texto="Alguna mierda aquí pa probar"></Conocimiento>
                <Conocimiento icono="" titulo="Backend" texto="Alguna mierda aquí pa probar"></Conocimiento>
              </div>
              <div className="h-52 w-full flex gap-5">
                <Conocimiento icono="" titulo="Backend" texto="Alguna mierda aquí pa probar"></Conocimiento>
                <Conocimiento icono="" titulo="Backend" texto="Alguna mierda aquí pa probar"></Conocimiento>
                <Conocimiento icono="" titulo="Backend" texto="Alguna mierda aquí pa probar"></Conocimiento>
              </div>
            </div>
          </div>
        </section>
        <SeparadorMain></SeparadorMain>
        <section className="h-35 w-full flex gap-10">
          <div className="h-auto w-full bg-zinc-200 flex flex-col">
            <TituloMain texto="Educación"></TituloMain>
            <div className="h-auto w-full bg-white">
              <Educacion institucion="Liceo Salazar y Herrera" cargo="Estudiante" fechas="enero 2004 - Diciembre 2010"
                tituloObtenido="Estudios primarios" descripcion="Nose que putas poner aquí"></Educacion>
              <div className="w-full h-px px-10 bg-gray-100"></div>
              <Educacion institucion="Liceo Salazar y Herrera" cargo="Estudiante" fechas="enero 2010 - Diciembre 2016"
                tituloObtenido="Bachiller" descripcion="Nose que putas poner aquí"></Educacion>
              <div className="w-full h-px px-10 bg-gray-100"></div>
              <Educacion institucion="Universidad de Antioquia" cargo="Estudiante" fechas="junio 2017 - Actualmente"
                tituloObtenido="Ingeniería de Sistemas" descripcion="Nose que putas poner aquí"></Educacion>
              <div className="w-full h-px px-10 bg-gray-100"></div>
              <Educacion institucion="Altos Software S.A.S." cargo="Analista/Programador" fechas="junio 2019 - Actualmente"
                tituloObtenido="Experencia Laboral" descripcion="Nose que putas poner aquí"></Educacion>
            </div>
          </div>
        </section>
        <SeparadorMain></SeparadorMain>
        <section className="h-35 w-full flex gap-10">
          <div className="h-auto w-full bg-zinc-200 flex flex-col">
            <TituloMain texto="Portafolio"></TituloMain>
            <div className="h-50 w-full bg-white">

            </div>
          </div>
        </section>
      </main>
      <aside className="h-full bg-white">
        <section>
          <div className="flex flex-col gap-3 py-1 px-1">
            <span className="text-sm font-semibold">Links</span>
            <RedSocial href="https://github.com/Simonberrio14" icono="GitHub"></RedSocial>
            <RedSocial href="https://www.linkedin.com/in/simon-berrio-gaviria-70989b294/" icono="Linkedin"></RedSocial>
            <RedSocial href="https://www.facebook.com/simonb5" icono="Facebook"></RedSocial>
            <RedSocial href="https://www.instagram.com/simon.b5/?hl=es-la" icono="Instagram"></RedSocial>
          </div>
        </section>
      </aside>
    </div>
  );
}

export default Home;