import React, {useState} from 'react';
import Card from './Card.js';
import Nav from './Nav.js';
import data from'./Data.js';
import WordAdd from'./WordAdd.js';
import {Link, Route, Switch} from 'react-router-dom';

function App() {
  
 
  return (
    <div className="App">
      <Route exact path="/">
        <Nav/>
        <div className="wrap">
          <Card/>
        </div>
      </Route>
      <Route path="/word/add/" component={WordAdd}/>
      </div>
  );
}



export default App;
