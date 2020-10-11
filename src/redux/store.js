import { combineReducers, createStore } from "redux";
import { gameReducer, gridReducer } from "./reducers";

const store = createStore(combineReducers({ game: gameReducer, grid: gridReducer }));

export default store;
