import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function Nav() {
  
  return (
      <div className="titlediv">
          <div className="nav">
            <div style = {{fontsize: '30px'}}>🦄🌈Z세대 딕셔너리🪐✨
           <Link to="/word/add"> <button className='word-add-button' >단어추가</button></Link>
            </div>
          </div>
          <hr className='titleline'></hr>
      </div>
    
  );
}



export default Nav;
