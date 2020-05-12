import { CurrentStateActionType, StateInfo, CurrentStateAction } from "./types";
import { store } from "../..";

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

export const setZoom = (zoom: number): CurrentStateAction => ({
    type: CurrentStateActionType.SetZoom,
    payload: zoom,
});
