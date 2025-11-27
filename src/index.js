import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header.jsx';
import { Inicio } from './Inicio.jsx';
import { SobreMi } from './SobreMi.jsx';
import { Habilidades } from './Habilidades.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Inicio />
    <h2 id='sobreMi' className='ms-5 mt-5'>Sobre Mi</h2>
    <SobreMi />
    <h2 id='habilidades' className='ms-5 mt-5 mb-5'>Habilidades</h2>
    <Habilidades />
  </>
);


