import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Login from './login';
import Dashboard from './dashboard';
import NotFound from './notFound';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path='/' component={Dashboard} exact />
              <Route path='/login' component={Login} exact />
              <Route component={NotFound} />
              <Redirect to="/login"/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
