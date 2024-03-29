import { MapJobsAction, MapJob, MapJobsActionType } from "./types";
import { DistrictID, PrecinctID } from "../../types";

export const mapJobsReducer = (
    state: MapJob[] = [],
    action: MapJobsAction
): MapJob[] => {
    switch (action.type) {
        case MapJobsActionType.AddMapJobAction: {
            const newState = [...state];

            newState.push(action.payload);

            return newState;
        }
        case MapJobsActionType.RemoveMapJobAction: {
            return state.filter((job) => job.id !== action.payload);
        }
        case MapJobsActionType.UpdateMapJobAction: {
            const newState = [...state];

            const job = newState.find((job) => job.id === action.payload.id);

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

            if (action.payload.score) {
                job.score = action.payload.score;
            }

            if (action.payload.probability) {
                job.probability = action.payload.probability;
            }

            return newState;
        }
        default: {
            return state;
        }
    }
};
