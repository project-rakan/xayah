import { createStore, combineReducers } from "redux";
import { currentStateReducer } from "./fooCurrentState/reducers";
import { currentDistrictingReducer } from "./fooCurrentDistricting/reducers";
import { mapJobsReducer } from "./fooMapJobs/reducers";
import { mapScoresReducer } from "./fooMapScores/reducers";

const rootReducer = combineReducers({
    currentState: currentStateReducer,
    currentDistricting: currentDistrictingReducer,
    mapJobs: mapJobsReducer,
    mapScores: mapScoresReducer,
});

export const store = createStore(rootReducer);
