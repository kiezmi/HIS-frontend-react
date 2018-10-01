import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class patientList extends React.Component {
  
    constructor(props) {
        super(props)
      //  console.log(props.auth) Undefined
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
                        <Link to={'patientDetails/' + item.uid}><h4>Ver ficha paciente</h4></Link>
                    </div>
                ))
            }
        </div>)
    }
}

export default patientList