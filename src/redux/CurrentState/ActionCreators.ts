import { store } from "../store";
import { CurrentStateActionType } from "./types";
import { GetCurrentRedistrictingResponse } from "../../types/bladecallerApiTypes";

// TODO: The response type ought to be abstracted away from the redux model.

export const ChangeCurrentState = (
    response: GetCurrentRedistrictingResponse
): void => {
    store.dispatch({
        type: CurrentStateActionType.ChangeCurrentStateAction,
        payload: response,
    });
};

export const SetCurrentStateLoadingStatus = (isLoading: boolean): void => {
    store.dispatch({
        type: CurrentStateActionType.SetStateLoadingStatus,
        payload: isLoading,
    });
};
