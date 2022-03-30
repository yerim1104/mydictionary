import React from 'react';
import {useHistory} from 'react-router-dom';

function WordAddNav() {
  
  let history = useHistory();
  
  return (
      <div className="titlediv">
          <div className="nav">
            <div style = {{fontsize: '30px'}}>🦄🌈Z세대 딕셔너리🪐✨
           <button className='word-add-button' onClick={()=>{
             history.goBack();
           } }>뒤로가기</button>
            </div>
          </div>
          <hr className='titleline'></hr>
      </div>
    
  );
}



export default WordAddNav;