import { store } from "../store";
import { CurrentStateActionType } from "./types";
import { GetStateInfoResponse } from "../../providers/bladecallerProvider/types";

// TODO: The response type ought to be abstracted away from the redux model.

export const changeCurrentState = (response: GetStateInfoResponse): void => {
    store.dispatch({
        type: CurrentStateActionType.ChangeCurrentStateAction,
        payload: response,
    });
};

export const setCurrentStateLoadingStatus = (isLoading: boolean): void => {
    store.dispatch({
        type: CurrentStateActionType.SetStateLoadingStatus,
        payload: isLoading,
    });
};
