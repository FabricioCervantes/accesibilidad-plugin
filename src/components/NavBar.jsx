import Banner from "../assets/bannernuevo2.png";

export default function NavBar() {
  return (
    <>
      <img src={Banner} alt="Banner " />
      <nav className=" bg-blue-950 text-white hidden md:block">
        <ul className="flex justify-center font-bold gap-8 p-5 text-2xl">
          <a href="" tabIndex={1}>
            <li className="text-center ">Inicio</li>
          </a>
          <a href="">
            <li className="text-center ">Documentos</li>
          </a>
          <a href="">
            <li className="text-center ">Estadísticas</li>
          </a>
          <a href="">
            <li className="text-center ">Aliados Estratégicos</li>
          </a>
          <a href="">
            <li className="text-center ">Contacto</li>
          </a>
          <a href="">
            <li className="text-center ">Iniciar Sesión</li>
          </a>
        </ul>
      </nav>
    </>
  );
}
