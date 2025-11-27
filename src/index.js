import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header.jsx';
import { Inicio } from './Inicio.jsx';
import { SobreMi } from './SobreMi.jsx';
import { Habilidades } from './Habilidades.jsx';
import { Proyectos } from './Proyectos.jsx';
import { Contacto } from './Contacto.jsx';
import './css/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Header />
    <Inicio />
    <h2 id='sobreMi' className='ms-5 mt-5'>Sobre Mi</h2>
    <SobreMi />
    <h2 id='habilidades' className='ms-5 mt-5 mb-5'>Habilidades</h2>
    <Habilidades />
    <h2 id='proyectos' className='ms-5 mt-5 mb-5'>Proyectos</h2>
    <Proyectos />
    <h2 id='contacto' className='ms-5 mt-5 mb-5'>Contacto</h2>
    <Contacto />
  </StrictMode>
);


