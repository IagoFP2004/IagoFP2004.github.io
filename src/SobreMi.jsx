export function SobreMi() { 
  return (
    <section id="sobre-mi">
      <div className="container py-5">
        <div className="d-flex flex-column flex-md-row align-items-center gap-4 gap-md-5">
          
          {/* Foto */}
          <img
            className="rounded-4 img-fluid shadow"
            src="https://images.steamusercontent.com/ugc/1689396737202224497/D7865CB8601CCBF9D8CF772B11C20BEBBB7A4A5E/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
            alt="Imagen Sobre Mi"
          />

          {/* Texto decorado */}
          <div className="card border-0 shadow-sm flex-grow-1">
            <div className="card-body p-4 p-md-4">

              <p className="text-uppercase small text-primary fw-semibold mb-1">
                Sobre mí
              </p>

              <h3 className="mb-3">
                Desarrollador de Aplicaciones Web
              </h3>

              <p className="mb-3 text-muted">
                <span className="fw-semibold">¡Hola! Soy Iago Francisco Pérez</span>, un apasionado
                desarrollador web con experiencia en la creación de sitios web modernos y funcionales.
                Me especializo en tecnologías como <span className="fw-semibold">HTML, CSS, JavaScript</span> y
                frameworks populares como <span className="fw-semibold">React</span> y <span className="fw-semibold">PHP</span>.
              </p>

              <p className="mb-3">
                Me encanta transformar ideas en experiencias digitales atractivas y eficientes. Siempre
                estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.  
                <span className="d-block mt-2 fw-semibold">
                  ¡Explora mi portafolio para ver algunos de mis proyectos destacados!
                </span>
              </p>

              <hr className="my-3" />

              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <i className="bi bi-geo-alt-fill me-2 text-primary" />
                  Ponteareas, Pontevedra
                </li>
                <li className="mb-1">
                  <i className="bi bi-envelope-fill me-2 text-primary" />
                  iagofranciscoperez@gmail.com
                </li>
                <li className="mb-1">
                  <i className="bi bi-person-fill me-2 text-primary" />
                  21 años
                </li>
                <li>
                  <i className="bi bi-mortarboard-fill me-2 text-primary" />
                  Técnico superior en Desarrollo de Aplicaciones Web
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );              
}
