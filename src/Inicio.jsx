export function Inicio() {
  return (
    <div 
    style={{
        backgroundImage: 'url(/ImagenInicio.png)', 
        height: '92vh', backgroundSize: 'cover',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    }}
    >
      <h1>Bienvenido a mi Portafolio</h1>
      <p>Explora mis proyectos y habilidades.</p>
    </div>
  );
}