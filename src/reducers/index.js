import counterReducer from "./counter-reducer";
import loggedReducer from "./logged-reducer";

import { combineReducers } from "redux";

const AllReducers = combineReducers({
    counter: counterReducer,
    isLogged:loggedReducer
});

export default AllReducers;