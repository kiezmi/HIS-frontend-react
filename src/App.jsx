import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './login';
import Dashboard from './dashboard';
import NotFound from './notFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PatientList from './patientList';
import HistoryList from './historiesList';
import PatientDetails from './patientDetails';
import HistoryDetails from './historyDetails';
import CreateUser from './createUser';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path='/' component={Dashboard} exact />
              <Route path='/login' component={Login} exact />
              <Route path='/patientList' component={PatientList} exact />
              <Route path='/historiesList' component={HistoryList} exact />
              <Route path='/patientDetails/:uid' component={PatientDetails} exact />
              <Route path='/historyDetails/:uid' component={HistoryDetails} exact />
              <Route path='/createUser' component={CreateUser} exact />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
