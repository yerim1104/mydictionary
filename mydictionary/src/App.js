import React, {useState} from 'react';
import Card from './Card.js';
import Nav from './Nav.js';
import data from'./Data.js';
import WordAdd from'./WordAdd.js';
import {Link, Route, Switch} from 'react-router-dom';
import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, addDoc,updateDoc,deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { loadWordFB} from './redux/modules/WordsRedux';
import {useDispatch} from 'react-redux';

function App() {
  // const dispatch = useDispatch();
  // React.useEffect( async() =>{
  //   dispatch(loadWordFB());
  //   },[]);


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
