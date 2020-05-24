import { MapScore, MapScoresAction, MapScoresActionType } from "./types";

export const mapScoresReducer = (
    state: MapScore[] = [],
    action: MapScoresAction
): MapScore[] => {
    switch (action.type) {
        case MapScoresActionType.AddMapScoreAction: {
            return [...state, action.payload];
        }
        case MapScoresActionType.RemoveMapScoreAction: {
            return state.filter((score) => score.id !== action.payload);
        }
        case MapScoresActionType.UpdateMapScoreAction: {
            const newState = [...state];
            const score = newState.find(
                (score) => score.id === action.payload.id
            );

            if (!score) {
                return state; // Ignore updates to scores that we dont have.
            }

            score.probability = action.payload.probability;
            score.score = action.payload.score;

            return newState;
        }
        default:
            return state;
    }
};
