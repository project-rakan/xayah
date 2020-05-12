import { MapScore, MapScoresActionType, MapScoreUpdate } from "./types";
import { GUID } from "../../types";
import { store } from "../..";

export const addMapScore = (job: MapScore): void => {
    store.dispatch({
        type: MapScoresActionType.AddMapScoreAction,
        payload: job,
    });
};

export const removeMapScore = (jobID: GUID): void => {
    store.dispatch({
        type: MapScoresActionType.RemoveMapScoreAction,
        payload: jobID,
    });
};

export const updateMapScore = (update: MapScoreUpdate): void => {
    store.dispatch({
        type: MapScoresActionType.UpdateMapScoreAction,
        payload: update,
    });
};
