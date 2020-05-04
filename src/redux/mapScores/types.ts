import { GUID, State, PrecinctID, DistrictID } from "../../types";

export enum MapScoresActionType {
    AddMapScoreAction = "AddMapScoresAction",
    RemoveMapScoreAction = "RemoveMapScoresAction",
    UpdateMapScoreAction = "UpdateMapScoreAction",
}

interface AddMapScoreAction {
    type: MapScoresActionType.AddMapScoreAction;
    payload: MapScore;
}

interface RemoveMapScoreAction {
    type: MapScoresActionType.RemoveMapScoreAction;
    payload: GUID;
}

interface UpdateMapScoreAction {
    type: MapScoresActionType.UpdateMapScoreAction;
    payload: MapScoreUpdate;
}

export type MapScoresAction =
    | AddMapScoreAction
    | RemoveMapScoreAction
    | UpdateMapScoreAction;

export interface MapScoreUpdate {
    id: GUID;
    score: number;
    probability: number;
}

export interface MapScore {
    id: GUID;
    state: State;
    map: Map<PrecinctID, DistrictID>;
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    score?: number;
    probability?: number;
}
