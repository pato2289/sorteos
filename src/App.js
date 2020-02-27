import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootswatch/dist/superhero/bootstrap.min.css"; 

import Navbar from './components/Navbar'
import Home from './components/Home'
import Draw from './components/Draw'
import Teams from './components/Teams'
import Tasks from './components/Tasks'
import InvisibleFriend from './components/InvisibleFriend'


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/draw" component={Draw} />
        <Route path="/teams" component={Teams} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/invisiblefriend" component={InvisibleFriend} />
      </div>
    </Router>
  );
}

export default App;
