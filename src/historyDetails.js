import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class historyDetails extends React.Component {

    constructor(props) {
        super(props)
        //console.log(props.match.params.uid)
        this.state = {
            ...api.getHistory(props.match.params.uid)
        };
    }
    render() {
        const { data: user } = this.state;

        return (
            <div>
                {!this.state.error ? (
                        <div>
                            <h1>Bienvenido a sus datos: </h1>
                            <p> Paciente:{user.userId}</p>
                            <p> Doctor:{user.doctorId}</p>
                            <p> Sintomas:{user.log}</p>

                        </div>
                    ) : (
                            <div>{this.state.error}</div>
                        )
                }
                <Link to={'/'}><h4>Volver</h4></Link>
            </div>
        )
    }
}




export default historyDetails