import React, {useState} from 'react';
import Card from './Card.js';
import Nav from './Nav.js';
import Data from'./Data.js';
import WordAdd from'./WordAdd.js';
import WordAddNav from './WordAddNav.js';
import {Link, Route, Switch} from 'react-router-dom';

function App() {
  let [datas, datastrans] = useState(Data);
  return (
    <div className="App">
      <Route exact path="/">
        <Nav/>
        <div className="wrap">
          {
            datas.map((a,i)=>{
              return <Card datas={datas[i]} i={i} key={i}/>
            })
          }
        </div>
      </Route>
      <Route path="/word/add" component={WordAdd}/>
      </div>
  );
}



export default App;
