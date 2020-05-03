import { createStore, combineReducers } from "redux";
import { CurrentStateReducer } from "./CurrentState/reducers";
import { CurrentDistrictingReducer } from "./CurrentDistricting/reducers";

const RootReducer = combineReducers({
    CurrentState: CurrentStateReducer,
    CurrentDistricting: CurrentDistrictingReducer,
});

export const store = createStore(RootReducer);
