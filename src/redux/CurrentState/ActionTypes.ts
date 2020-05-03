import { GetCurrentRedistrictingResponse } from "../../Types/bladecallerApiTypes";

export enum CurrentStateActionType {
    ChangeCurrentStateAction = "ChangeCurrentStateAction",
}

interface ChangeCurrentStateAction {
    type: CurrentStateActionType.ChangeCurrentStateAction;
    payload: GetCurrentRedistrictingResponse;
}

export type CurrentStateAction = ChangeCurrentStateAction;
