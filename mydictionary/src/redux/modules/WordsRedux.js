// WordsRedux.js
import {db} from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc,updateDoc,deleteDoc } from "firebase/firestore";
import { async } from "@firebase/util";


// Actions
const LOAD = "WordsRedux/LOAD";
const CREATE = 'WordsRedux/CREATE';
const DELETE = 'WordsRedux/DELETE';
const UPDATE = 'WordsRedux/UPDATE';

const initialState = { list: [],};

// Action Creators
//CREATE
export function createWordsRedux(WordsRedux){
    return {type: CREATE, WordsRedux};
}

//DELETE
export function deleteWordsRedux(WordsRedux_index){
  
    return {type: DELETE, WordsRedux_index};
}
//LOAD
export function loadWordRedux(word_list){
    return {type: LOAD, word_list };
}

//UPDATE
export function updateWordRedux(WordsRedux_index){
    return {type: UPDATE, WordsRedux_index };
}


//Middle wares
export const loadWordFB =() =>{
    return  async function(dispatch){
        const word_data = await getDocs(collection(db,"dictionarycollection"));

        let word_list = [];
        word_data.forEach((w) => {
            word_list.push({id:w.id, ...w.data()});
        })

        dispatch(loadWordRedux(word_list));
    };
};

export const addWordFB = (word) => {
    return async function (dispatch){
    const docRef = await addDoc(collection(db,"dictionarycollection"), word);
    const _word = await getDoc(docRef);
    const word_data = {id: _word.id, ..._word.data()};

    dispatch(createWordsRedux(word_data));
    }
}

export const updateWordFB = (word_id) =>{
    return async function(dispatch,getState) {
        const docRef = doc(db,"dictionarycollection",word_id);
        await updateDoc(docRef, {completed: true});

        console.log(getState().WordsRedux);
        const _word_list = getState().WordsRedux.list;
        const word_index = _word_list.findIndex((w)=>{
            return w.id=== word_id;
        })
        dispatch(updateWordRedux(word_index));
    }
}

export const deleteWordFB = (word_id) =>{
    return async function(dispatch, getState) {
        if(!word_id){
            window.alert("안돼요!");
            return;
        }

        const docRef = doc(db,"dictionarycollection",word_id);
        await deleteDoc(docRef);
        const _word_list = getState().WordsRedux.list;
        const word_index = _word_list.findIndex((w)=>{
            return w.id=== word_id;
        });

        dispatch(deleteWordsRedux(word_index));
    }
}



// Reducer


//Create
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case "WordsRedux/LOAD":{
        return{list: action.word_list};
    }

    case "WordRedux/UPDATE":{
        const new_word_list = state.list.map((l,idx)=>{
            if(parseInt(action.WordsRedux_index) === idx) {
                return {...l, completed: true};
            }else{
                return l;
            }
        });
        console.log({list: new_word_list});
        return {list: new_word_list};
    }

  //CREATE 이걸 지워야 두개씩 안뜸
  
    // case "WordsRedux/CREATE":{
    //     const new_word_list =[...state.list, action.WordsRedux];
    //     return{list : new_word_list};
    // }

    //Delete

    case "WordsRedux/DELETE": {
        console.log(111111,state, action.WordsRedux_index);
            return {list: state.list.filter((l, idx)=> idx !== action.WordsRedux_index)
            };
        // return state;
    }
    default:
        return state;
    }
}
    //     const new_word_list= state.list.filter((l, idx) => {
    //     return parseInt(action.i) !== idx;
    // });
    //     return { list: new_word_list };
    // }
    // default: return state;
    // }
    // }
    