import { State, Precinct } from "../../types";

export enum CurrentStateActionType {
    SetStateInfo = "SetStateInfo",
    SetStateLoadingStatus = "SetStateLoadingStatus",
}

interface SetStateInfo {
    type: CurrentStateActionType.SetStateInfo;
    payload: StateInfo;
}

interface SetStateLoadingStatus {
    type: CurrentStateActionType.SetStateLoadingStatus;
    payload: boolean;
}

export type CurrentStateAction = SetStateInfo | SetStateLoadingStatus;

export interface StateInfo {
    state: State;
    maxDistricts: number;
    fips: number;
    precincts: Precinct[];
}

export interface CurrentState {
    isLoading: boolean;
    stateInfo: StateInfo;
}
