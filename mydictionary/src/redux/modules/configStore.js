import{createStore, combineReducers, applyMiddleware, compose} from "redux";
import WordsRedux from "./WordsRedux";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({WordsRedux});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer,enhancer);


export default store;