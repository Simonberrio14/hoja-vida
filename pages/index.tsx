import { BarraProgreso } from "@/components/barra-progreso";
import { Conocimiento } from "@/components/conocimiento";
import { DialogPerfil } from "@/components/dialogs/dialog-perfil";
import { Educacion } from "@/components/educacion";
import { HabilidadExtra } from "@/components/habilidad-extra";
import { ProyectoPortafolio } from "@/components/proyecto-portafolio";
import { RedSocial } from "@/components/red-social";
import { SeparadorMain } from "@/components/separador-main"
import { TituloMain } from "@/components/titulo-main";
import FotoCompleta from "../media/foto-completa.jpg";
import FotoPerfil from "../media/foto-perfil.jpg";
import FotoSuperSnake from "../media/super-snake.jpg";
import FotoCervino from "../media/cervino.jpg";
import FotoOlimpo from "../media/olimpo.jpg";

const Home = () => {
  return (
    <div className="h-full w-full flex bg-zinc-200">
      <aside className="h-full w-2/12 bg-white top-0 left-0 bottom-0 py-1 px-5 flex flex-col fixed"> {/* Barra lateral izquierda */}
        <section>
          <div className="flex flex-col items-center py-1 px-1">
            <img className="w-36 h-40 rounded-full" src={FotoPerfil.src} alt="Foto de Perfil"></img>
            <span className="text-lg font-semibold">Simón Berrio Gaviria</span>
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
            <BarraProgreso idioma="PowerBuilder" porcentaje={100}></BarraProgreso>
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
      <main className="w-9/12 bg-zinc-200 mx-8 pl-60 pr-7 flex-1 overflow-auto">
        <section className="w-full flex gap-40 bg-white"> {/* Perfil */}
          <div className="w-2/3 flex flex-col gap-1 justify-items-center">
            <span className="w-full mt-4 text-3xl text-center">Hola! Soy Simón Berrio Gaviria</span>
            <span className="w-full mt-4 text-3xl text-center text-green-300"> Desarrollador Fullstack</span>
            <p className="w-full my-4 mx-10 text-lg text-left">
              Me considero una persona responsable, dinámica, con deseos de superación personal. Aprendo de manera rápida y asertiva con el fin de cumplir con puntualidad, honestidad y responsabilidad las distintas actividades que me son asignadas y para las cuales soy contratado.
            </p>
            <DialogPerfil></DialogPerfil>
          </div>
          <div className="w-1/3">
            <img className="w-80 h-80" src={FotoCompleta.src} alt="Foto Completa"></img>
          </div>
        </section>
        <SeparadorMain></SeparadorMain>
        <section className="w-full"> {/* Conocimientos */}
          <div className="w-full bg-zinc-200">
            <TituloMain texto="Conocimientos"></TituloMain>
            <div className="flex flex-col bg-zinc-200 gap-5">
              <div className="h-60 w-full flex gap-4">
                <Conocimiento icono="Angular" titulo="Frontend"
                  texto="Durante el trabajo actual en la empresa con Altos Software, he tenido experiencia trabajando desarrollo frontend con el framework Angular."></Conocimiento>
                <Conocimiento icono="Bootstrap" titulo="Estilos"
                  texto="Junto con el framework Angular, trabajamos el diseño con la ayuda de otro framework llamado bootstrap."></Conocimiento>
                <Conocimiento icono="Android" titulo="Android"
                  texto="Durante la epoca de la pandemia en el año 2020, estuve innovando en el desarrollo de aplicaciones moviles en el sistema Android. Este fue desarrollado hasta un estado beta, ya que nunca salió a producción."></Conocimiento>
              </div>
              <div className="h-60 w-full flex gap-4">
                <Conocimiento icono="Net" titulo="Backend"
                  texto="El framework usado dentro el trabajo para el desarrollo de backend es .Net Core. Junto con el manejo de Entity Framework para facilitar y mejorar la manipulación de la base de datos."></Conocimiento>
                <Conocimiento icono="MsqlServer" titulo="Bases Datos"
                  texto="El motor de base de datos usado es SQL Server. Donde se gestiona la información mediante el método relacional y se gestiona los permisos de los usuarios dentro de las bases de datos."></Conocimiento>
                <Conocimiento icono="Screen" titulo="Stand Alone"
                texto="Al ingresar a la empresa, inicié trabajando en desarrollo de aplicaciones de escritorio usando el lenguaje de programación PowerBuilder y conectando con bases de datos SQL Server"></Conocimiento>
              </div>
            </div>
          </div>
        </section>
        <SeparadorMain></SeparadorMain>
        <section className="w-full">{/* Educación */}
          <div className="w-full bg-zinc-200 flex flex-col">
            <TituloMain texto="Educación"></TituloMain>
            <div className="w-full bg-white">
              <Educacion institucion="Liceo Salazar y Herrera" cargo="Estudiante" fechas="enero 2004 - Diciembre 2010"
                tituloObtenido="Estudios primarios" 
                descripcion="Allí cursé los grados desde primero hasta quinto. Donde, además de enseñar las materias académicas, se enfatiza el desarrollo de habilidades sociales, la formación de hábitos de estudio y la promoción de la creatividad y la curiosidad"></Educacion>
              <div className="w-full h-px px-10 bg-gray-100"></div>
              <Educacion institucion="Liceo Salazar y Herrera" cargo="Estudiante" fechas="enero 2010 - Diciembre 2016"
                tituloObtenido="Bachiller"
                descripcion="También allí, realicé todo el bachillerato desde el grado sexto hasta el grado undecimo. Donde me fue brindada una base sólida de conocimiento y habilidades tanto académicas como personales"></Educacion>
              <div className="w-full h-px px-10 bg-gray-100"></div>
              <Educacion institucion="Universidad de Antioquia" cargo="Estudiante" fechas="junio 2017 - Actualmente"
                tituloObtenido="Ingeniería de Sistemas"
                descripcion="Luego de finalizar un curso preuniversitoraio en Formarte, ingrese a la Universidad de Antiquia donde actualmente me encuentro cursando el pregrado de Ingeniería de Sistemas en dicha universidad."></Educacion>
              <div className="w-full h-px px-10 bg-gray-100"></div>
              <Educacion institucion="Altos Software S.A.S." cargo="Analista/Programador" fechas="junio 2019 - Actualmente"
                tituloObtenido="Experencia Laboral"
                descripcion="En esta empresa tuvé mis primeros inicios en la programación. En un principio inicié desarrollando aplicaciones de escritorio mediante PowerBuilder, para posteriormente incursionar en el desarrollo web en ambos frentes: Frontend(Angular) y Backend(.Net Core)."></Educacion>
            </div>
          </div>
        </section>
        <SeparadorMain></SeparadorMain>
        <section className="w-full flex"> {/* Portafolio */}
          <div className="w-full bg-zinc-200 flex flex-col">
            <TituloMain texto="Portafolio"></TituloMain>
            <div className="w-full bg-zinc-200 overflow-x-auto whitespace-nowrap">
              <div className="h-auto w-fit flex gap-10">
                <ProyectoPortafolio imagen={FotoCervino} titulo="Cervino"
                  descripcionCorta="Angular/.Net Core/Sql Server"
                  descripcionLarga="Sistema web multiusuario que controla los Inventarios y el Alquiler de Equipos. Una vez determinados clientes, equipos, obras y otra información básica, permite alimentar las Remisiones y Devoluciones de Equipos, para finalmente generar la facturación correspondiente por período y los informes que de allí se derivan. Además con el ingreso de Entradas y Salidas de Equipos se mantiene actualizado el Inventario, permitiendo la generación de los respectivos informes"
                  href="https://cervino.altos-apps.com"></ProyectoPortafolio>
                <ProyectoPortafolio imagen={FotoOlimpo} titulo="Olimpo"
                  descripcionCorta="Angular/.Net Core/Sql Server"
                  descripcionLarga="Sistema web que controla los procesos de preinscripción, inscripción a preeventos, a eventos y a subeventos. Permite la configuración e impresión de escarapelas y certificados"
                  href="https://olimpo.altos-apps.com"></ProyectoPortafolio>
                <ProyectoPortafolio imagen={FotoSuperSnake} titulo="Super Snake"
                  descripcionCorta="Windows Forms en C#"
                  descripcionLarga="Este proyecto se realizó basado en el popular juego clasico 'Snake'. El juego se centra en controlar una serpiente para que coma alimentos y crezca mientras se evitan colisiones con los bordes y el propio cuerpo"
                  href="https://github.com/Simonberrio14/serpientica"></ProyectoPortafolio>
                {/* <ProyectoPortafolio imagen={FotoSuperSnake} titulo="Proyecto Java" descripcionCorta=""
                  descripcionLarga=""
                  href=""></ProyectoPortafolio> */}
              </div>
            </div>
          </div>
        </section>
        <SeparadorMain></SeparadorMain>
        <section className="w-full">{/* Pie de Página */}
          <div className="w-full h-12 flex bg-white items-center">
            <span className="w-full text-xs text-center">
              Todos los derechos reservados. Copyright Simón Berrio © 2023
            </span>
          </div>
        </section>
      </main>
      <aside className="h-full bg-white right-0 fixed">{/* Barra Lateral Derecha */}
        <section>
          <div className="flex flex-col gap-3 py-1 px-1">
            <span className="pt-8 text-sm font-semibold">Links</span>
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