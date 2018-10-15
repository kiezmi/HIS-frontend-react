import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


class dashboard extends React.Component {
    logout = () => {
        this.props.logoutStore();
    };
    render() {
        if (!this.props.auth) {
            return <Redirect to="/login" />
        } else {
            const { role, name, uid } = this.props.auth;
            const links = [
                {
                    to: "/patientList",
                     text: "Listado de pacientes",
                    roles: ["admin", "doctor"]
                }, { 
                    to: "/historiesList", 
                    text: "Listado de historiales", 
                    roles: ["admin", "doctor"] },
                {
                    to: "/createUser",
                    text: "Crear nuevo usuario",
                    roles: ["admin", "technical"]
                },
                {
                    to: "/patientDetails/" + uid,
                    text: "Ficha paciente",
                    roles: ["admin", "patient"]
                },
                {
                    to: "/historyDetails/" + uid,
                    text: "Detalles de historial",
                    roles: ["admin", "patient"]
                }

            ];
            return (
                <section className="dashboard">
                    <h1> Dashboard</h1>
                    <h5>Tu rol es: {role}{" "}
                        {this.props.auth && <button onClick={this.logout}>Logout</button>}</h5>
                    <h5>
                        {this.props.auth ?
                            'Usuario ' + name + ' conectado' :
                            'no user logged in'}
                    </h5>

                    {links.map(
                        item => (item.roles.includes(role) &&
                            <Link key={item.to} to={item.to}><h3>{item.text}</h3></Link>)
                    )}
                </section>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};
const mapDispatchToProps = dispatch => {
    return {
        logoutStore: () => dispatch({
            type: 'USER_LOGGED_OUT'
        })
    };
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(dashboard);

export default Dashboard;