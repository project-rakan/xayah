import { store } from "../store";
import { CurrentStateActionType, StateInfo } from "./types";

// TODO: The response type ought to be abstracted away from the redux model.

export const setCurrentStateLoadingStatus = (isLoading: boolean): void => {
    store.dispatch({
        type: CurrentStateActionType.SetStateLoadingStatus,
        payload: isLoading,
    });
};

export const setStateInfo = (stateInfo: StateInfo): void => {
    store.dispatch({
        type: CurrentStateActionType.SetStateInfo,
        payload: stateInfo,
    });
};
