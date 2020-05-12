import { MapJobsActionType, MapJob, MapJobUpdate } from "./types";
import { GUID } from "../../types";
import { store } from "../..";

export const addMapJob = (job: MapJob): void => {
    store.dispatch({
        type: MapJobsActionType.AddMapJobAction,
        payload: job,
    });
};

export const removeMapJob = (jobID: GUID): void => {
    store.dispatch({
        type: MapJobsActionType.RemoveMapJobAction,
        payload: jobID,
    });
};

export const updateMapJob = (update: MapJobUpdate): void => {
    store.dispatch({
        type: MapJobsActionType.UpdateMapJobAction,
        payload: update,
    });
};
