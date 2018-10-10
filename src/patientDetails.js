import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class patientDetails extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props.match.params.uid)
        this.state = {
            user: api.getPatientUID(props.match.params.uid)
        };
    }
    render() {
        return (
            <div>
                <h1>Bienvenido a sus datos: </h1>
                <p> Nombre:{this.state.user.name}</p>
                <p> Apellidos:{this.state.user.surname}</p>
                <p> DNI:{this.state.user.dni}</p>
                <Link to={'/historyDetails/' + this.state.user.uid}><h4>Ver Historiales medicos</h4></Link>
            </div>
        )
    }
}

export default patientDetails