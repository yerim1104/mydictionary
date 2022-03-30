import './App.css';
import React from 'react';
import WordAddNav from './WordAddNav.js';
import {Link, Route, Switch} from 'react-router-dom';

function WordAdd(){
  const input_wrap = React.useRef(null);

  window.setTimeout(()=>{
    console.log(input_wrap);
  }, 1000);
    return(
      <div >  
        <WordAddNav/>
        <div className='inputsection'>
        <h2>단어 추가하기</h2>
        <p>단어</p>
        <input ref={input_wrap}></input>
        <p>의미</p>
        <input></input>
        <p>예문</p>
        <input></input>
        <button className='savebutton'>저장하기</button>
        </div>
        
      </div>

            
    );
  
  }

  export default WordAdd;