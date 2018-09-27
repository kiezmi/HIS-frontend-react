import React from 'react';
import api from './services/api';
import './createUser.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class createUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: null
        };
    }
    createUser(ev) {
        ev.preventDefault();
        const { username, password } = this.state;
        let user = api.createUser(username, password);
        if (user) {
            //valid user
            this.props.createUserStore(user);
        } else {
            // invalid user
            this.setState({ error: "Username or Password invalid" });
        }
    }
    handleChange(ev) {  //Ejecutas un handleChange para los 2 porque el primero lee la
        // propiedad name y despues busca en password del evento
        console.dir(ev.target)
        this.setState({ [ev.target.name]: ev.target.value, error: null });
    }

    render() {
        if (this.props.auth) {
            return <Redirect to="/" />
        }
        return (
            <section className="createUser">
                {this.state.eror ? (<div className="error">{this.state.error}</div>) : null}
                <form onSubmit={this.createUser.bind(this)}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange.bind(this)} />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
                    <button type="submit">Entrar</button>
                </form>
            </section>
        );
    }
}

const createUser = connect(state =>
    ({ auth: state.auth }),
    dispach => ({
        createUserStore: user => dispach({ type: 'USER_LOGGED_IN', payload: user })
    })
)(createUser);

export default createUser;