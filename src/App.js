import React, {Fragment, useState, useEffect} from "react";
import Formulario from './component/Formulario';
import Cita from './component/Cita';
import './App.css';

function App() {

  //Citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use Efect para realizar ciertas operaciones cuando cambia el state
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas] );

  //funcion que cree citaS actuales y cree la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas, cita 
    ]);
  };

  //Elimina las citas por el id
  const actualizarCitas= id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Titulo condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas'
  

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
            <h2>{titulo}</h2>
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
