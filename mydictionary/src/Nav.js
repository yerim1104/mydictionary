import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function Nav() {
  
  return (
      <div className="titlediv">
          <div className="nav">
            <div style = {{fontsize: '30px'}}>π¦πZμΈλ λμλλ¦¬πͺβ¨
           <Link to="/word/add"> <button className='word-add-button' >λ¨μ΄μΆκ°</button></Link>
            </div>
          </div>
          <hr className='titleline'></hr>
      </div>
    
  );
}



export default Nav;
