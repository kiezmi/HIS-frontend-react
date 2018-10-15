import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
    render() {
        return (
            <section className="notFound">
             <h1>Lo que buscas no se encuentra por aqui</h1>
             <h2>Lo sentimos mucho, siga buscando</h2>
             <Link to={'/'}><h4>Volver</h4></Link>
           </section>
        )
    }
}
export default NotFound;