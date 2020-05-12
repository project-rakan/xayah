import { UserInput, UserInputAction, UserInputActionType } from "./types";
import { stat } from "fs";
import { Page } from "../../types";

const initialState = {
    alpha: 0,
    beta: 0,
    gamma: 0,
    eta: 0,
    mapName: "",
    page: Page.StateView,
};

export const userInputReducer = (
    state: UserInput = initialState,
    action: UserInputAction
): UserInput => {
    switch (action.type) {
        case UserInputActionType.SetAlpha: {
            const newState = { ...state };
            newState.alpha = action.payload;
            return newState;
        }
        case UserInputActionType.SetBeta: {
            const newState = { ...state };
            newState.beta = action.payload;
            return newState;
        }
        case UserInputActionType.SetGamma: {
            const newState = { ...state };
            newState.gamma = action.payload;
            return newState;
        }
        case UserInputActionType.SetEta: {
            const newState = { ...state };
            newState.eta = action.payload;
            return newState;
        }
        case UserInputActionType.SetMapName: {
            const newState = { ...state };
            newState.mapName = action.payload;
            return newState;
        }
        case UserInputActionType.SetPage: {
            const newState = { ...state };
            newState.page = action.payload;
            return newState;
        }
        default:
            return state;
    }
};
