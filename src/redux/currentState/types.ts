import { GetStateInfoResponse } from "../../providers/bladecallerProvider/types";

export enum CurrentStateActionType {
    ChangeCurrentStateAction = "ChangeCurrentStateAction",
    SetStateLoadingStatus = "SetStateLoadingStatus",
}

interface ChangeCurrentStateAction {
    type: CurrentStateActionType.ChangeCurrentStateAction;
    payload: GetStateInfoResponse;
}

interface SetStateLoadingStatus {
    type: CurrentStateActionType.SetStateLoadingStatus;
    payload: boolean;
}

export type CurrentStateAction =
    | ChangeCurrentStateAction
    | SetStateLoadingStatus;

export interface CurrentState {
    isLoading: boolean;
    stateInfo: GetStateInfoResponse;
}
