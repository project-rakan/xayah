import { currentStateReducer } from "./currentState/reducers";
import { currentDistrictingReducer } from "./currentDistricting/reducers";
import { mapJobsReducer } from "./mapJobs/reducers";
import { mapScoresReducer } from "./mapScores/reducers";
import { combineReducers } from "redux";

export const reducers = {
    currentState: currentStateReducer,
    currentDistricting: currentDistrictingReducer,
    mapJobs: mapJobsReducer,
    mapScores: mapScoresReducer,
};

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
