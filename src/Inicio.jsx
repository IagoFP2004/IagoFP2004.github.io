import './css/inicio.css'

export function Inicio() {
  return (
    <div className='contenedorInicio w-100'
    style={{
        backgroundImage: 'url(/ImagenInicio.png)', 
        backgroundClip: 'border-box',
        height: '100vh', backgroundSize: 'cover',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
    }}
    >
      <h1>Iago Francisco Pérez</h1>
      <h2>Desarrollador Web</h2>
      <p className='p-3'>Explora mis proyectos y habilidades</p>
    </div>
  );
}