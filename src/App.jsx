// App.js
import React from 'react';
// import CustomNavbar from './component/navbar/navbar.jsx';  // Asegúrate de que la ruta sea correcta
import CustomNavbar from './component/navbar/navbar.jsx'; // 
import Inicio from './component/inicio/inicio.jsx';
import './App.css';

function App() {
  return (
    <>
      <div>
        <CustomNavbar /> 
        <Inicio /> 
      </div>
      {/* Resto de tu código */}
    </>
  );
}

export default App;
