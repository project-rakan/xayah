import { State } from "../types";

export const changeCurrentState = (state: State): void => {
    if (!process.env.REACT_APP_GOOGLE_API_KEY) {
        // TODO if no key is present dispatch mock data
    } else {
        // TODO else call google maps api and bladecaller to update map viewbounds
        // and stateInfo respectively
    }
};
