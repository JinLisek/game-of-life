import { createStore } from "redux";
import { gridReducer } from "./reducers";

const store = createStore(gridReducer);

export default store;
