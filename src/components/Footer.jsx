import FooterLogo from "../assets/footer-tec.jpg";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-10">
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-20 p-5">
        <div className="flex flex-col gap-5">
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Campus 1</h3>
            <p className="w-96">
              Avenida Tecnológico #1500, Col. Lomas de Santiaguito. Morelia,
              Mich.
            </p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Campus 2</h3>
            <p className="w-96">
              Camino de la Arboleda S/N, Residencial San Jose de la Huerta,
              Tenencia Morelos. Morelia, Mich.
            </p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Contacto</h3>
            <p className="w-96">depi@morelia.tecnm.mx</p>
          </div>
        </div>
        <img
          className="h-64"
          src={FooterLogo}
          alt="Logo del Tec"
          title="Logo del Tec"
        />
      </div>
      <p className="text-sm mt-10 text-gray-400 text-center">
        Tecnológico Nacional de México. Todos los Derechos reservados © 2023.
        Desarrollado por el Instituto Tecnológico de Morelia.
      </p>
    </footer>
  );
}
