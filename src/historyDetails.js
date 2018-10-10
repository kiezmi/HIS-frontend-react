import React from 'react';
import api from './services/api';

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
            </div>
        )
    }
}

export default historyDetails