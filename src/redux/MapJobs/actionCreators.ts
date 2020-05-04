import { store } from "../store";
import { MapJobsActionType, MapJob, MapJobUpdate } from "./types";
import { GUID } from "../../types/atomicTypes";

export const AddMapJob = (job: MapJob): void => {
    store.dispatch({
        type: MapJobsActionType.AddMapJobAction,
        payload: job,
    });
};

export const RemoveMapJob = (jobID: GUID): void => {
    store.dispatch({
        type: MapJobsActionType.RemoveMapJobAction,
        payload: jobID,
    });
};

export const UpdateMapJob = (update: MapJobUpdate): void => {
    store.dispatch({
        type: MapJobsActionType.UpdateMapJobAction,
        payload: update,
    });
};
