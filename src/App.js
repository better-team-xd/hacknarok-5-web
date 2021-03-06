import React from 'react';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import Place from './components/Place';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="bg">
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegistrationForm} />
          <Route exact path='/place/:id' component={Place} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
