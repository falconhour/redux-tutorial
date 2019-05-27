import { combineReducers } from "redux";

import counter from "./counter-reducers";
import todoList from "./todo-list-reducers";

const rootReducer = combineReducers({
    counter,
    todoList
});

export default rootReducer;