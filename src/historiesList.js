import React from "react";
import api from "./services/api";
import { Link } from "react-router-dom";

class historiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: api.getHistories()
    };
  }
  render() {
    return (
      <div className="userRegistry">
        <div className="envolturaGrande">
          <div className="contenedor">
            <div className="cabecera">Historias</div>
            <div className="cuerpo">
              {this.state.users.map(item => (
                <div key={item.id}>
                  <div>ID Paciente: {item.userId}</div>
                  <div>ID Doctor: {item.doctorId}</div>
                  <div>Por que vino: {item.log}</div>
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
