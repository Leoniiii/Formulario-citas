import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
const Formulario = (props) => {
    //Crear State de citas;
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario:'',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    
    const [error, actualizarError] = useState(false);

    const handleChange = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault();

        //Validar el form
        if(mascota.trim() ==='' || propietario.trim() ==='' || fecha.trim() ==='' || hora.trim() ==='' || sintomas.trim() ==='') {
            actualizarError(true);
            return;
        } else {
            actualizarError(false)
        }

        //Asignar un Id
        cita.id = uuidv4();

        //Crear la cita
        props.crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario:'',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }
    

    return ( 
        <Fragment>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
            :  null}
            <h2>Crear Citas</h2>
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                 <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                 <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                 <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-with"
                    onChange={handleChange}
                    value={hora}

                />
                <label>Síntomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"   
                    onChange={handleChange}
                    value={sintomas}
 
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Citas</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario
