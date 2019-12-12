import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Header from './Layouts/Header'
import Dashboard from './Components/Dashboard';
import AllExpenses from './Components/AllExpenses';
import Friends from './Components/Friends';
import RecentAcitivity from './Components/RecentActivity';
import Invite from './Components/Invite';
import Groups from './Components/Groups';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container fixed>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/activity' component={RecentAcitivity}/>
        <Route exact path='/all' component={AllExpenses}/>
        <Route exact path='/groups' component={Groups}/>
        <Route exact path='/friends' component={Friends}/>
        <Route exact path='/invite' component={Invite}/>
        </Container>
      </div>
      </Router>
  );
}

export default App;
