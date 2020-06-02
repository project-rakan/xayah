import { CurrentMapActionType, StateInfo, CurrentMapAction } from "./types";

export const setCurrentMapLoadingStatus = (
    isLoading: boolean
): CurrentMapAction => ({
    type: CurrentMapActionType.SetMapLoadingStatus,
    payload: isLoading,
});

export const setStateInfo = (stateInfo: StateInfo): CurrentMapAction => ({
    type: CurrentMapActionType.SetStateInfo,
    payload: stateInfo,
});

export const setZoom = (zoom: number): CurrentMapAction => ({
    type: CurrentMapActionType.SetZoom,
    payload: zoom,
});

export const setSize = (size: {
    width: number;
    height: number;
}): CurrentMapAction => ({
    type: CurrentMapActionType.SetSize,
    payload: size,
});
