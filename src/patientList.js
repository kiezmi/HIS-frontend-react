import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class patientList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: api.getPatients()
        };
    }
    render() {
        return (<div>
            <h1>Bienvenido al listado de pacientes:</h1>
            {
                this.state.users.map(item => (
                    <div key={item.uid}>
                        <div>Nombre: {item.name}</div>
                        <div>Apellidos: {item.surname}</div>
                        <div>DNI: {item.dni}</div>
                        <Link to={'patientDetails/' + item.uid}><h4>Ver Historial medico</h4></Link>
                    </div>
                ))
            }
        </div>)
    }
}

export default patientList