import React  from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { deleteWordFB,loadWordFB, updateWordFB} from './redux/modules/WordsRedux';
import { useParams } from 'react-router-dom';
import Data from './Data.js';
import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, addDoc,updateDoc,deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { useEffect } from 'react';
import styled from 'styled-components';

function Card(props){
    // const params = useParams();
    // const WordsRedux_index = params.index;
    const alldata = useSelector((state)=>state.WordsRedux.list);
    const dispatch = useDispatch();

    React.useEffect( async() =>{
      dispatch(loadWordFB());
      },[]);

    return(
        <div>
            {
              alldata.map((a,i)=>{
                
                return(
                
                  <div  className='Card' key={i}>
              <Cardchange completed={a.completed}>
                <h4>{a? a.word:"" }</h4>
                <p>뜻: {a.meaning}</p>
                <p>예시: {a.example}</p>
                 <button onClick={()=>{
                   dispatch(updateWordFB(a.id));
                 }}>완료</button>
             
                 <button onClick={()=>{
                   dispatch(deleteWordFB(a.id)); 
                   
                 }}>삭제</button>
                 </Cardchange>
                </div>
              )})
            }
          
         </div>
         

            
    );
  
  }
const Cardchange = styled.div`
background-color: ${(props)=>props.completed? "white": "blue"};
color: ${(props)=>props.completed? "blue": "white"};
`;
  export default Card;
