import React from 'react';
import api from './services/api';
import './login.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: null
        };
    }
    login(ev) {
        ev.preventDefault();
        const { username, password } = this.state;
        let user = api.login(username, password);
        if (user) {
            //valid user
            this.props.loginStore(user);
            this.props.history.push('/');
        } else {
            // invalid user
            this.setState({ error: "Username or Password invalid" });
        }
    }
    handleChange(ev) {  //Ejecutas un handleChange para los 2 porque el primero lee la propiedad name y despues busca el on change
        this.setState({ [ev.target.name]: ev.target.value, error: null });
    }
    
    render() {
        if(this.props.auth){
            return <Redirect to="/"/>
        }
        return (
            <section className="login">
                {this.state.eror ? (<div className="error">{this.state.error}</div>) : null}
                <form onSubmit={this.login.bind(this)}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange.bind(this)}>User</input>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)}>Password</input>
                    <button type="submit">Entrar</button>
                </form>
            </section>
        );
    }
}

const Login = connect(state => ({
    auth: state.auth
}), 
dispach => ({
    loginStore: user => 
    dispach({
        type: 'USER_LOGGED_IN',
        payload: user
    })
})
)(login);

export default Login;