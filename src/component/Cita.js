import React from 'react';

const Citas = (props) => 
    ( 
        <div className="cita">
            <p>Mascota: <span>{ props.cita.mascota }</span></p>
            <p>Dueño: <span>{ props.cita.propietario }</span></p>
            <p>Fecha: <span>{ props.cita.fecha }</span></p>
            <p>Hora: <span>{ props.cita.hora }</span></p>
            <p>Sintomas: <span>{ props.cita.sintomas }</span></p>

        </div>
    );

 
export default Citas