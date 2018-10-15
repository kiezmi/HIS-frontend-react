import React from 'react';
import api from './services/api';
import { Link } from 'react-router-dom';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'patient',
            uid: '',
            name: '',
            surname: '',
            dni: '',
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    handleSubmit(ev) {
        ev.preventDefault();
        api.createUser(this.state);
        this.cancelCourse();
    }

    cancelCourse = () => {
        document.getElementById("newuser").reset();
    }

    render() {
        return (
            <div>
                <div className="userRegistry">
                    <form id="newuser" onSubmit={this.handleSubmit.bind(this)}>
                        <label>Rol: </label>
                        <select name="role" value={this.state.value} onChange={this.handleChange}>>
                            <option value="patient">Paciente</option>
                            <option value="doctor">Doctor</option>
                            <option value="technical">Técnico</option>
                        </select>
                        <label>ID: </label>
                        <input type="text" name="uid" placeholder="introduzca id" value={this.state.newid} onChange={this.handleChange}></input><br />
                        <label>Nombre: </label>
                        <input type="text" name="name" placeholder="introduzca nombre" value={this.state.newname} onChange={this.handleChange}></input><br />
                        <label>Apellidos: </label>
                        <input type="text" name="surname" placeholder="introduzca apellidos" value={this.state.newsurname} onChange={this.handleChange}></input><br />
                        <label>DNI: </label>
                        <input type="text" name="dni" placeholder="introduzca DNI" value={this.state.newdni} onChange={this.handleChange}></input><br />
                        <label>Nombre de usuario: </label>
                        <input type="text" name="username" placeholder="introduzca nombre de usuario" value={this.state.newusername} onChange={this.handleChange}></input><br />
                        <label>Contraseña: </label>
                        <input type="text" name="password" placeholder="introduzca contraseña" value={this.state.newpass} onChange={this.handleChange}></input><br />
                        <button type="submit">Registrar</button>
                    </form>
                    <Link to={'/'}><h4>Volver</h4></Link>
                </div>
            </div>
        )
    }
}

export default CreateUser;