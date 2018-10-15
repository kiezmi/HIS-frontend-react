import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class historyDetails extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props.match.params.uid)
        this.state = {
            user: api.getHistory(props.match.params.uid)
        };
    }
    render() {
        return (
            <div>
                <h1>Bienvenido a sus datos: </h1>
                <p> Paciente:{this.state.user.userId}</p>
                <p> Doctor:{this.state.user.doctorId}</p>
                <p> Sintomas:{this.state.user.log}</p>
                <Link to={'/'}><h4>Volver</h4></Link>
            </div>
        )
    }
}




export default historyDetails