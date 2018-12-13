import React from "react";
import api from "./services/api";
import { Link } from "react-router-dom";

class historiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: api.getHistories().map(history => ({
        ...history,
        nombrePaciente: api.getNameFromUid(history.userId),
        nombreDoctor: api.getNameFromUid(history.doctorId)
      }))
    };
  }
  render() {
    return (
      <div className="historylist">
        <div className="envolturaGrande">
          <div className="contenedor">
          <div className="cabecera"><h1 >Historiales Clinicos</h1></div>
            <div className="cuerpo">
              {this.state.users.map(item => (
                <div key={item.id}>
                  <div>Paciente: {item.nombrePaciente}</div>
                  <div>Doctor: {item.nombreDoctor}</div>
                  <div>Historia: {item.log}</div>
                  <Link to={"historyDetails/" + item.userId}>
                    <h4>Ver paciente</h4>
                  </Link>
                </div>
              ))}
            </div>
            <div className="footer"><Link to={'/'}><h4>Inicio</h4></Link></div>
          </div>
        </div>
      </div>
    );
  }
}

export default historiesList;
