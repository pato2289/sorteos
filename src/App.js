import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/core'
import "bootswatch/dist/superhero/bootstrap.min.css"; 
import Navbar from './components/Navbar'
import Home from './components/Home'
import Draw from './components/Draw'
import Teams from './components/Teams'
import Tasks from './components/Tasks'
import InvisibleFriend from './components/InvisibleFriend'


function App() {
  return (
    <>
    <Helmet>
      <title>RandomWorld</title>
      <link href="https://fonts.googleapis.com/css?family=Poppins:400,700|Varela+Round&display=swap" rel="stylesheet"></link>
      </Helmet>
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
    </>
  );
}

export default App;
