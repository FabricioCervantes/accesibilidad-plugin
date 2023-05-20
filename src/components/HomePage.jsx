import Grid1 from "../assets/grid-1.jpeg";
import Grid2 from "../assets/grid-2.jpg";
import Grid3 from "../assets/grid-3.jpg";
import Grid4 from "../assets/grid-4.jpg";

import LogoTec from "../assets/logo_tec.png";
import Mapa from "../assets/mapa.png";

export default function HomePage() {
  return (
    <>
      <div className="bg-white pt-5 h-fit lg:h-[60vh]">
        <h1 className="text-4xl text-center font-bold">
          Laboratorio Nacional del TECNM Para Impulsar la I+D+I en Ingeniería
        </h1>
        <div className="flex-wrap md:flex-nowrap my-10 flex justify-center items-center lg:gap-20">
          <img
            className="h-72"
            src={LogoTec}
            alt="Logo del Tec"
            title="Logo del Tec"
          />
          <img
            className="h-72"
            src={Mapa}
            alt="Mapa del Tec"
            title="Mapa del Tec"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold text-center">Acerca de nosotros</h1>
        <div className="flex gap-10 justify-center p-10">
          <div className="flex flex-col gap-5">
            <p className="text-justify max-w-5xl text-xl">
              Somos un laboratorio dedicado a fomentar la investigación, el
              desarrollo y la innovación en el campo de la ingeniería. Nuestro
              objetivo principal es impulsar el progreso tecnológico y
              contribuir al avance de la sociedad a través de proyectos
              innovadores. <br /> En nuestras instalaciones de vanguardia,
              contamos con equipos de última generación y un equipo
              multidisciplinario de expertos en diversas áreas de la ingeniería.
              Trabajamos en estrecha colaboración con instituciones académicas,
              empresas y organizaciones para llevar a cabo investigaciones de
              alto impacto y desarrollar soluciones creativas a los desafíos
              actuales. Nuestro laboratorio se enfoca en áreas como la energía
              renovable, la inteligencia artificial, la robótica, la
              nanotecnología y muchas otras disciplinas de vanguardia. <br />{" "}
              <br />
              Estamos comprometidos con la excelencia científica y la
              transferencia de conocimiento, promoviendo la formación de talento
              y la colaboración tanto a nivel nacional como internacional. Te
              invitamos a explorar nuestro sitio web, descubrir nuestros
              proyectos destacados, conocer a nuestro equipo y estar al tanto de
              las últimas noticias e innovaciones en el campo de la ingeniería.
              ¡Únete a nosotros en esta emocionante aventura de descubrimiento y
              crecimiento tecnológico! ¡Juntos, impulsamos el futuro de la
              ingeniería a través de la investigación, el desarrollo y la
              innovación!
            </p>
            <a
              href="#"
              className="rounded-md w-fit place-self-start text-xl p-2 text-white bg-blue-950 "
            >
              ¡Únete!
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              className="h-72 rounded-md"
              src={Grid1}
              alt="Imagen del Tec 1"
              title="Imagen del Tec 1"
            />
            <img
              className="h-72 rounded-md"
              src={Grid2}
              alt="Imagen del Tec 2"
              title="Imagen del Tec 2"
            />
            <img
              className="h-72 rounded-md"
              src={Grid3}
              alt="Imagen del Tec 3"
              title="Imagen del Tec 3"
            />
            <img
              className="h-72 rounded-md"
              src={Grid4}
              alt="Imagen del Tec 4"
              title="Imagen del Tec 4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
