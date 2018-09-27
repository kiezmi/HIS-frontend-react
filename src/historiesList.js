import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class historiesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: api.getHistories()
        };
    }
    render() {
        return (<div>
            <h1>Bienvenido al listado de historiales:</h1>
            {
                this.state.users.map(item => (
                    <div key={item.id}>
                        <div>ID Paciente: {item.userId}</div>
                        <div>ID Doctor: {item.doctorId}</div>
                        <div>Por que vino: {item.log}</div>
                        <Link to={'historyDetails/' + item.userId}><h4>Ver paciente</h4></Link>
                    </div>
                ))
            }
        </div>)
    }
}

export default historiesList