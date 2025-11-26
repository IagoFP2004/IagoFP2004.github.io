export function Header() {
  return (
    <header className="w-100 bg-dark text-white">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          {/* Logo / Brand */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              style={{ width: "160px" }} // si ves que no cabe, baja un poco este número
              src="./IagoFP2004_white.png"
              alt="Logo IagoFP2004"
              className="d-inline-block align-text-top"
            />
          </a>

          {/* Botón hamburguesa (sale solo en responsive) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Menú: colapsado en móvil, en línea en >= lg */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-house p-2" />Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-person p-2" />Sobre mí
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-list-ol p-2" />Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-folder-fill p-2" />Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-envelope p-2" />Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
