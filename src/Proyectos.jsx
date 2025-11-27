import { useState } from "react";

export function Proyectos() {
  const [hoveredCard, setHoveredCard] = useState(false);
  return (
    <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
      <div>
        <div className="card" style={{
          width: "18rem", width: hoveredCard ? "450px" : "286px",
          transition: "width 0.3s ease"
        }}>
          <img
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
            src={hoveredCard ? "/NutroPro.gif" : "/NutroPro.png"}
            style={{
              width: hoveredCard ? "450px" : "286px",
              transition: "width 0.3s ease"
            }}
            className="card-img-top"
            alt="imagen proyecto"
          />

          <div className="card-body">
            <h5 className="card-title">NutroPro</h5>
            <p className="card-text">
              Proyecto de fin de ciclo de DAW. Este proyecto simula una tienda
              online de suplementación deportiva, donde los usuarios pueden
              registrarse, iniciar sesión, ver productos, añadirlos al carrito
              y realizar pedidos.
            </p>
            <div className="mb-3 d-flex justify-content-center flex-wrap gap-2">
              <span className="badge bg-secondary">PHP</span>
              <span className="badge bg-secondary">MySQL</span>
              <span className="badge bg-secondary">JS</span>
              <span className="badge bg-secondary">Bootstrap</span>
            </div>
            <a href="https://github.com/IagoFP2004/NutroPro" target="_blank" className="btn btn-dark d-flex justify-content-center">
              <i className="bi bi-github pe-2"></i>Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
