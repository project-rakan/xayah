import { Page } from "../../types";
import { RouterActionType, RouterAction } from "./types";

export const setPage = (page: Page): RouterAction => ({
    type: RouterActionType.SetPage,
    payload: page,
});
