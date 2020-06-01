import { createStore, combineReducers } from "redux";
import { currentMapReducer } from "./currentMap/reducers";
import { currentDistrictingReducer } from "./currentDistricting/reducers";
import { mapJobsReducer } from "./mapJobs/reducers";
import { mapScoresReducer } from "./mapScores/reducers";
import { userInputReducer } from "./userInput/reducers";
import { routerReducer } from "./router/reducers";

const rootReducer = combineReducers({
    currentMap: currentMapReducer,
    currentDistricting: currentDistrictingReducer,
    mapJobs: mapJobsReducer,
    mapScores: mapScoresReducer,
    userInput: userInputReducer,
    page: routerReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
