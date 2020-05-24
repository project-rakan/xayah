import {
    MapScore,
    MapScoresActionType,
    MapScoreUpdate,
    MapScoresAction,
} from "./types";
import { GUID } from "../../types";

export const addMapScore = (job: MapScore): MapScoresAction => ({
    type: MapScoresActionType.AddMapScoreAction,
    payload: job,
});

export const removeMapScore = (jobID: GUID): MapScoresAction => ({
    type: MapScoresActionType.RemoveMapScoreAction,
    payload: jobID,
});

export const updateMapScore = (update: MapScoreUpdate): MapScoresAction => ({
    type: MapScoresActionType.UpdateMapScoreAction,
    payload: update,
});
