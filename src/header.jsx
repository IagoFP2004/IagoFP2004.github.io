export function Header() {
  return (
    <header className="header" class="w-100 p-4 bg-dark text-white " >
      <div class="container d-flex justify-content-between align-items-center" > 
        <img
        style={{ width: '200px' }}
        src="./IagoFP2004_white.png"
        alt="Logo IagoFP2004"
        />
        <ul className="d-flex gap-4 list-unstyled m-0" >
            <li><i class="bi bi-house p-2"></i>Inicio</li>
            <li><i class="bi bi-person p-2"></i>Sobre Mi</li>
            <li><i class="bi bi-list-ol p-2"></i>Habilidades</li>
            <li><i class="bi bi-folder-fill p-2"></i>Proyectos</li>
            <li><i class="bi bi-envelope p-2"></i>Contacto</li>
        </ul>
      </div>
    </header>
  );
}