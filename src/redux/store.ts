import { createStore, combineReducers } from "redux";
import { CurrentStateReducer } from "./CurrentState/reducers";
import { CurrentDistrictingReducer } from "./CurrentDistricting/reducers";
import { MapJobsReducer } from "./MapJobs/reducers";
import { MapScoresReducer } from "./MapScores/reducers";

const RootReducer = combineReducers({
    CurrentState: CurrentStateReducer,
    CurrentDistricting: CurrentDistrictingReducer,
    MapJobs: MapJobsReducer,
    MapScores: MapScoresReducer,
});

export const store = createStore(RootReducer);
