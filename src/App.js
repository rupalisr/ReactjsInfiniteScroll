import React from 'react';
import './App.css';
import {Router, Route,Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import history from './components/history';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:null,
      password:null,
      flag:true
    }
  }

  render() {
    return (
      <Router history={history}>    
        <Switch>
            <Route exact path="/" component={LoginPage}></Route> :
            <Route exact path="/home" component={HomePage}></Route>
        </Switch>
    </Router>
    );
  }
}
export default App;
