import { CurrentStateActionType, StateInfo, CurrentStateAction } from "./types";

// TODO: The response type ought to be abstracted away from the redux model.

export const setCurrentStateLoadingStatus = (
    isLoading: boolean
): CurrentStateAction => ({
    type: CurrentStateActionType.SetStateLoadingStatus,
    payload: isLoading,
});

export const setStateInfo = (stateInfo: StateInfo): CurrentStateAction => ({
    type: CurrentStateActionType.SetStateInfo,
    payload: stateInfo,
});

export const setZoom = (zoom: number): CurrentStateAction => ({
    type: CurrentStateActionType.SetZoom,
    payload: zoom,
});
