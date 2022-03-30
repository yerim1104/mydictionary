// WordsRedux.js

// Actions
const CREATE = 'WordsRedux/CREATE';
const DELETE = 'WordsRedux/DELETE';

const initialState = { list: [{
        id: 0,
        word: "단어",
        meaning: "뜻",
        example: "예문"
    },
    {
        id: 1,
        word: "좋댓공",
        meaning: "SNS 게시물에 좋아요 누르고, 공유하고, 댓글을 달아 달라는 뜻.",
        example: "여러분~ 이번 영상 좋댓공 부탁드려요!"
    },
    {
        id: 2,
        word: "ㅈㅂㅈㅇ",
        meaning: "정보좀요의 초성을 따서 만든 MZ세대 신조어. 패션 앱 스타일쉐어에서 상대방에게 제품 정보를 물어볼 때 사용했던 것에서 유래함.",
        example: "바지 ㅈㅂㅈㅇ"
    },

]};

// Action Creators
export function createWordsRedux(WordsRedux){
    return {type: CREATE, WordsRedux};
}
export function deleteWordsRedux(WordsRedux_index){
  
    return {type: DELETE, WordsRedux_index};
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case "WordsRedux/CREATE":{
        const new_word_list =[...state.list, action.WordsRedux];
        return{list : new_word_list};
    }
    case "WordsRedux/DELETE": {
        console.log(state, action);
        const new_word_list = state.list.filter((l, idx)=>{
           console.log(action.i !== idx, action.i, idx);
            return action.i !== idx;
        });
        return state;
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
    