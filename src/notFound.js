import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <section className="notFound">
        <div className="envolturaGrande">
          <div className="contenedor">
            <div className="cabecera">
              <h1>404</h1>
            </div>
            <div className="cuerpo">
              <h2>Ups!! Eso ya no esta aqui</h2>
              <h3>Lo sentimos mucho, siga buscando</h3>
              </div>
              <div className="footer">
                <Link to={"/"}>
                  <h4>Volver</h4>
                </Link>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default NotFound;
