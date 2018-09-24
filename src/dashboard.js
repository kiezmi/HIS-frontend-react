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
            const links = [{
                to: "/patientList",
                text: "Patient List",
                roles: ["admin", "doctor"]
            }, {
                to: "/historiesList",
                text: "histories List",
                roles: ["admin", "doctor"]
            },
            {
                to: "/createUser",
                text: "Create User",
                roles: ["admin", "technical"]
            },
            {
                to: "/patientDetails" + uid,
                text: "Patient List",
                roles: ["admin", "patient"]
            },
            {
                to: "/historyDetails" + uid,
                text: "History Details",
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
                            name + 'user is logged in' :
                            'no user logged in'}
                    </h5>

                    {
                        links.map(
                            item => (item.roles.includes(role) &&
                                <Link to={item.to}>{item.text}</Link>)
                        )
                    }

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

const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps)
    (dashboard);

export default Dashboard;