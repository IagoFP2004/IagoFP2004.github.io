import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header.jsx';
import { Inicio } from './Inicio.jsx';
import { SobreMi } from './SobreMi.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Inicio />
    <h2 className='ms-5 mt-5'>Sobre Mi</h2>
    <SobreMi />
    <h2 className='ms-5 mt-5'>Habilidades</h2>
  </>
);


