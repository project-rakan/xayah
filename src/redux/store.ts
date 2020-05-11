import { createStore, combineReducers } from "redux";
import { currentStateReducer } from "./currentState/reducers";
import { currentDistrictingReducer } from "./currentDistricting/reducers";
import { mapJobsReducer } from "./mapJobs/reducers";
import { mapScoresReducer } from "./mapScores/reducers";

const rootReducer = combineReducers({
    currentState: currentStateReducer,
    currentDistricting: currentDistrictingReducer,
    mapJobs: mapJobsReducer,
    mapScores: mapScoresReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
