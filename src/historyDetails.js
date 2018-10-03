import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class historyDetails extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props.match.params.uid)
        this.state = {
            user: api.getHistoryUID(props.match.params.uid)
        };
    }
    render() {
        return (
            <div>
                <h1>Bienvenido a sus datos: </h1>
                <p> Nombre:{this.state.user.userId}</p>
                <p> Doctor:{this.state.user.doctorId}</p>
                <p> Historial:{this.state.user.dni}</p>
                
            </div>
        )
    }
}

export default historyDetails