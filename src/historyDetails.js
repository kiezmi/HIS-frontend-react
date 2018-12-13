import React from "react";
import api from "./services/api";
import { Link } from "react-router-dom";

class historyDetails extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.match.params.uid)
    let data = api.getHistoriesFromPatient(props.match.params.uid);
    let dataDetails = [];
    let element = {};
    data.forEach(item => {
      element = {
        nombrePaciente: api.getNameFromUid(item.userId),
        nombreDoctor: api.getNameFromUid(item.doctorId),
        log: item.log
      };
      dataDetails.push(element);
    });
    // console.log(JSON.stringify(dataDetails));
    this.state = {
      dataDetails
    };
  }
  render() {
    return (
      <div className="envolturaGrande">
        <div className="contenedor">
          <div className="cabecera">
            <h2>
              Historiales de {this.state.dataDetails[0].nombrePaciente}
            </h2>
          </div>
          <div className="cuerpo">
            {this.state.dataDetails.map((item, index) => (
              <div key={index}>
                <div> Le atendio: {item.nombreDoctor} </div>
                <div> Patologias: {item.log} </div>
              </div>
            ))}
          </div>
          <div className="footer">
            <Link to={"/"}>
              <h4>Volver</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default historyDetails;
