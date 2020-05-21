import { createStore, combineReducers } from "redux";
import { currentStateReducer } from "./currentState/reducers";
import { currentDistrictingReducer } from "./currentDistricting/reducers";
import { mapJobsReducer } from "./mapJobs/reducers";
import { mapScoresReducer } from "./mapScores/reducers";
import { userInputReducer } from "./userInput/reducers";
import { routerReducer } from "./router/reducers";

const rootReducer = combineReducers({
    currentState: currentStateReducer,
    currentDistricting: currentDistrictingReducer,
    mapJobs: mapJobsReducer,
    mapScores: mapScoresReducer,
    userInput: userInputReducer,
    page: routerReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
