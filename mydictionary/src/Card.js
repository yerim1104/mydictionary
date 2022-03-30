import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { deleteWordsRedux } from './redux/modules/WordsRedux';
import { useParams } from 'react-router-dom';
import Data from './Data.js';

function Card(props){
    // const params = useParams();
    // const WordsRedux_index = params.index;
    const alldata = useSelector((state)=>state.WordsRedux.list);
    const dispatch = useDispatch();
  

    return(
        <div>
            
            {
              alldata.map((a,i)=>{
                return( <div  className='Card' key={i}>
                
                <h4>{a.word}</h4>
                <p>뜻: {a.meaning}</p>
                <p>예시: {a.example}</p>
                 <button>완료</button>
                 <button>수정</button>
                 <button onClick={()=>{console.log("삭제!");
                dispatch(deleteWordsRedux(i))}}>삭제</button>
                </div>
              )})
            }
            
            
         </div>

            
    );
  
  }

  export default Card;
