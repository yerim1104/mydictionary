import './App.css';
import React, {useState} from "react";
import Data from './Data.js';

function Card(props){
    const[box, box_change]=React.useState([]);
   
    return(
        <div className='Card'>
            <div>
            <h4>{props.datas.word}</h4>
            <p>{props.datas.meaning}</p>
            <p>{props.datas.example}</p>
            
            {box.map((e,i)=>{
                return <button className="donebutton" onClick={()=>{box_change(i)}}
                style={{backgroundColor:i<= box? ("white"):("blue")}}>완료</button>
            })}
            <button>완료</button>
            <button>수정</button>
            <button>삭제</button>
            </div>
         </div>

            
    );
  
  }

  export default Card;
