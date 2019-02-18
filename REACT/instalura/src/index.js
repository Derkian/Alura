import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import * as serviceWorker from './serviceWorker';
import Timeline from './componentes/Timeline';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('auth-token') != null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",    
              search : "?msg=Você precisa estar logado para acessar essa página",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/timeline" component={Timeline} />        
    </Switch>
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
