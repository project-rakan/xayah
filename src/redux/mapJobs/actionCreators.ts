import {
    MapJobsActionType,
    MapJob,
    MapJobUpdate,
    MapJobsAction,
} from "./types";
import { GUID } from "../../types";

export const addMapJob = (job: MapJob): MapJobsAction => ({
    type: MapJobsActionType.AddMapJobAction,
    payload: job,
});

export const removeMapJob = (jobID: GUID): MapJobsAction => ({
    type: MapJobsActionType.RemoveMapJobAction,
    payload: jobID,
});

export const updateMapJob = (update: MapJobUpdate): MapJobsAction => ({
    type: MapJobsActionType.UpdateMapJobAction,
    payload: update,
});
