import React, {Fragment, useState} from "react";
import Formulario from './component/Formulario'
import Cita from './component/Cita'

import './App.css';

function App() {

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //funcion que cree citaS actuales y cree la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas, cita 
    ]);

  };

  const actualizarCitas= id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                actualizarCitas= {actualizarCitas}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
    
  );  
 }

export default App;
