import { store } from "../store";
import { CurrentDistrictingActionType } from "./types";
import { PrecinctID, DistrictID } from "../../types/atomicTypes";

export const ReplaceCurrentDistricting = (
    newMap: Map<PrecinctID, DistrictID>
): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.ReplaceCurrentDistrictingAction,
        payload: newMap,
    });
};

export const SetCurrentDistrictingLoadingStatus = (
    isLoading: boolean
): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.SetDistrictingLoadingStatus,
        payload: isLoading,
    });
};

// TODO: write rakan mocks and utilize UpdateCurrentDistricting
export const UpdateCurrentDistricting = (
    updates: Map<PrecinctID, DistrictID>
): void => {
    store.dispatch({
        type: CurrentDistrictingActionType.UpdateCurrentDistrictingAction,
        payload: updates,
    });
};
