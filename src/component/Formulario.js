import React, { Fragment, useState } from 'react';

const Formulario = () => {
    //Crear State de citas;
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario:'',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const handleChange = () => {
        console.log('escribiendo')
    }
    return ( 
        <Fragment>
            <h2>Crear Citas</h2>
            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                />
                 <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleChange}
                />
                 <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                />
                 <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-with"
                    onChange={handleChange}
                />
                <label>Síntomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"   
                    onChange={handleChange} 
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
