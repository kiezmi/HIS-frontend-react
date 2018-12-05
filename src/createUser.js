import React from "react";
import api from "./services/api";
import { Link } from "react-router-dom";
import "./createUser.css";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "patient",
      uid: "",
      name: "",
      surname: "",
      dni: "",
      username: "",
      password: ""
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
  };

  render() {
    return (
      <div className="userRegistry">
        <div className="envolturaGrande">
          <div className="contenedor">
            <div className="cabecera">Registro</div>
            <div className="cuerpo">
              <form
                className="formulario"
                id="newuser"
                onSubmit={this.handleSubmit.bind(this)}
              >
                <ul>
                  <li>
                    <label>Rol: </label>
                    <select
                      required={true}
                      name="role"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <option value="undefined" />
                      <option value="patient">Paciente</option>
                      <option value="doctor">Doctor</option>
                      <option value="technical">Técnico</option>
                    </select>
                  </li>
                  {/* <li>
                    <label>ID: </label>
                    <input
                      type="text"
                      name="uid"
                      placeholder="introduzca id"
                      value={this.state.newid}
                      onChange={this.handleChange}
                    />
                  </li> */}
                  <li>
                    <label>Nombre: </label>
                    <input
                      required={true}
                      type="text"
                      name="name"
                      placeholder="introduzca nombre"
                      value={this.state.newname}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <label>Apellidos: </label>
                    <input
                      required={true}
                      type="text"
                      name="surname"
                      placeholder="introduzca apellidos"
                      value={this.state.newsurname}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <label>DNI: </label>
                    <input
                      required={true}
                      type="text"
                      name="dni"
                      placeholder="introduzca DNI"
                      value={this.state.newdni}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <label>Nombre de usuario: </label>
                    <input
                      required={true}
                      type="text"
                      name="username"
                      placeholder="introduzca nombre de usuario"
                      value={this.state.newusername}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <label>Contraseña: </label>
                    <input
                      required={true}
                      type="text"
                      name="password"
                      placeholder="introduzca contraseña"
                      value={this.state.newpass}
                      onChange={this.handleChange}
                    />
                  </li>
                </ul>
                <button className="submit" type="submit">
                  Registrar
                </button>
              </form>
            </div>
            <div className="footer">
              <Link to={"/"}>Volver</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
