import { store } from "../store";
import { CurrentStateActionType } from "./ActionTypes";
import { GetCurrentRedistrictingResponse } from "../../Types/bladecallerApiTypes";

export const ChangeCurrentState = (
    response: GetCurrentRedistrictingResponse
): void => {
    store.dispatch({
        type: CurrentStateActionType.ChangeCurrentStateAction,
        payload: response,
    });
};
