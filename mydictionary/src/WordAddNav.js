import React from 'react';
import {useHistory} from 'react-router-dom';

function WordAddNav() {
  
  let history = useHistory();
  
  return (
      <div className="titlediv">
          <div className="nav">
            <div style = {{fontsize: '30px'}}>π¦πZμΈλ λμλλ¦¬πͺβ¨
           <button className='word-add-button' onClick={()=>{
             history.goBack();
           } }>λ€λ‘κ°κΈ°</button>
            </div>
          </div>
          <hr className='titleline'></hr>
      </div>
    
  );
}



export default WordAddNav;