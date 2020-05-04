import { MapJobsAction, MapJob, MapJobsActionType } from "./types";
import { DistrictID, PrecinctID } from "../../types/atomicTypes";

export const MapJobsReducer = (
    state: MapJob[] = [],
    action: MapJobsAction
): MapJob[] => {
    switch (action.type) {
        case MapJobsActionType.AddMapJobAction:
            return [action.payload, ...state];
        case MapJobsActionType.RemoveMapJobAction:
            return state.filter((job) => job.GUID !== action.payload);
        case MapJobsActionType.UpdateMapJobAction:
            const newState = [...state];
            const job = newState.find(
                (job) => job.GUID === action.payload.GUID
            );

            if (!job) {
                return state; // Ignore updates to Jobs that we dont have.
            }

            if (action.payload.mapId) {
                job.mapId = action.payload.mapId;
            }

            if (action.payload.map) {
                action.payload.map.forEach(
                    (value: DistrictID, key: PrecinctID) => {
                        job.map.set(key, value);
                    }
                );
            }

            return newState;
        default:
            return state;
    }
};
