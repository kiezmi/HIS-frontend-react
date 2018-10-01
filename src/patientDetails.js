import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class patientDetails extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            users: api.getPatientUID(this.state.uid)
        };
    }
    render() {
        return (<div>
            <h1>Bienvenido a sus datos: + {this.state.name} </h1>
            {
                this.state.users.map(item => (
                    <div key={item.uid}>
                        <div>Nombre: {item.name}</div>
                        <div>Apellidos: {item.surname}</div>
                        <div>DNI: {item.dni}</div>
                        <Link to={'/historyDetails/' + item.uid}><h4>Ver Historiales medicos</h4></Link>
                    </div>
                ))
            }
        </div>)
    }
}

export default patientDetails