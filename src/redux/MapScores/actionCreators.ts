import { MapScore, MapScoresActionType, MapScoreUpdate } from "./types";
import { store } from "../store";
import { GUID } from "../../types/atomicTypes";

export const AddMapScore = (job: MapScore): void => {
    store.dispatch({
        type: MapScoresActionType.AddMapScoreAction,
        payload: job,
    });
};

export const RemoveMapScore = (jobID: GUID): void => {
    store.dispatch({
        type: MapScoresActionType.RemoveMapScoreAction,
        payload: jobID,
    });
};

export const UpdateMapScore = (update: MapScoreUpdate): void => {
    store.dispatch({
        type: MapScoresActionType.UpdateMapScoreAction,
        payload: update,
    });
};
