export function Header() {
  return (
    <header className="w-100 bg-dark text-white">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center me-5 ms-5"> 
          {/* Logo */}
          <img
            style={{ width: '200px' }}
            src="./IagoFP2004_white.png"
            alt="Logo IagoFP2004"
          />

          {/* Botón hamburguesa */}
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

          {/* Menú colapsable */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i class="bi bi-house p-2"></i>Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i class="bi bi-person p-2"></i>Sobre Mi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " href="#">
                  <i class="bi bi-list-ol p-2"></i>Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i class="bi bi-folder-fill p-2"></i>Proyectos
                </a>
              </li>
               <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <i class="bi bi-envelope p-2"></i>Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
