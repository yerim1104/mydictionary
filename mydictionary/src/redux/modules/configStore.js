import{createStore, combineReducers} from "redux";
import WordsRedux from "./WordsRedux";

const rootReducer = combineReducers({WordsRedux});

const store = createStore(rootReducer);

export default store;