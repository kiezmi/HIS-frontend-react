import React from "react";
import api from "./services/api";
import { Link } from "react-router-dom";

class patientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: api.getPatients()
    };
  }
  render() {
    return (
      <div className="patientlist">
        <div className="envolturaGrande">
          <div className="contenedor">
            <div className="cabecera">Listado de pacientes</div>
            <div className="cuerpo">
              {this.state.users.map(item => (
                <div key={item.uid}>
                  <div>Nombre: {item.name}</div>
                  <div>Apellidos: {item.surname}</div>
                  <Link to={"patientDetails/" + item.uid}>
                    <h4>Ver ficha paciente</h4>
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

export default patientList;
