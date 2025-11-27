import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header.jsx';
import { Inicio } from './Inicio.jsx';
import { SobreMi } from './SobreMi.jsx';
import { Habilidades } from './Habilidades.jsx';
import { Proyectos } from './Proyectos.jsx';
import { Contacto } from './Contacto.jsx';
import './css/index.css';
import { Footer } from './Footer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode >
    <Header />
    <Inicio />
    <h2 id='sobreMi' className=' mt-5 text-center'><i className="bi bi-person p-2" />Sobre Mi</h2>
    <SobreMi />
    <h2 id='habilidades' className='mb-5 text-center'><i className="bi bi-list-ol p-2" />Habilidades</h2>
    <Habilidades />
    <h2 id='proyectos' className='mb-5 text-center'><i className="bi bi-folder-fill p-2" />Proyectos</h2>
    <Proyectos />
    <h2 id='contacto' className='mb-5 text-center'><i className="bi bi-envelope p-2" />Contacto</h2>
    <Contacto />
    <Footer />
  </StrictMode>
);


