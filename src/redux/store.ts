import { createStore, combineReducers } from "redux";
import { CurrentStateReducer } from "./CurrentState/Reducer";

const RootReducer = combineReducers({
    CurrentState: CurrentStateReducer,
});

export const store = createStore(RootReducer);
