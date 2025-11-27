export function Contacto() {
  return (
    <>
      <div className="mb-5 w-75 d-flex flex-column align-items-center justify-content-center mx-auto text-center">
        <p>
          Si tienes alguna idea, oferta o pregunta no dudes en ponerte en contacto,
          ¡estaré esperando con ansias tu mensaje!
        </p>
      </div>

      {/* Aquí cambiamos el flex por el grid de Bootstrap */}
      <div className="container mb-5">
        <div className="row row-cols-2 row-cols-md-4 g-3 justify-content-center">
          <div className="col d-flex justify-content-center">
            <a
              href="https://www.linkedin.com/in/iago-francisco-p%C3%A9rez-b03a90289/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-primary text-primary px-4 py-3 w-100"
            >
              <i className="bi bi-linkedin pe-2"></i>
              LinkedIn
            </a>
          </div>

          <div className="col d-flex justify-content-center">
            <a
              href="https://github.com/IagoFP2004"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-primary text-primary px-4 py-3 w-100"
            >
              <i className="bi bi-github pe-2"></i>
              GitHub
            </a>
          </div>

          <div className="col d-flex justify-content-center">
            <a
              href="mailto:iagofranciscoperez@gmail.com"
              className="btn border border-primary text-primary px-4 py-3 w-100"
            >
              <i className="bi bi-envelope pe-2"></i>
              Email
            </a>
          </div>

          <div className="col d-flex justify-content-center">
            <a
              href="https://instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-primary text-primary px-4 py-3 w-100"
            >
              <i className="bi bi-instagram pe-2"></i>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
