import './App.css';
import React, {useRef} from 'react';
import WordAddNav from './WordAddNav.js';
import Data from './Data';
import {useDispatch} from "react-redux";
import {createWordsRedux} from "./redux/modules/WordsRedux";
import {Link, Route, Switch} from 'react-router-dom';
import {useHistory} from"react-router-dom";

function WordAdd(){
  const history = useHistory();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const dispatch = useDispatch();

  
  const addWordData = () =>{
    dispatch(createWordsRedux
      ({word: inputRef1.current.value,
      meaning: inputRef2.current.value,
      example: inputRef3.current.value,}),
      ); 
  };
  
  
  return(
      <div >  
        <WordAddNav/>
        <div className='inputsection'>
        <h2>단어 추가하기</h2>
        <p>단어</p>
        <input name= "word" ref={inputRef1} ></input>
        <p>의미</p>
        <input name= "meaning" ref={inputRef2} ></input>
        <p>예문</p>
        <input name= "example" ref={inputRef3}></input>

        <button className='savebutton'
        onClick={()=>{
          addWordData()
          history.goBack()
        }}>저장하기</button> </div>
        
  
      </div>

            
  );
  
  }

  export default WordAdd;