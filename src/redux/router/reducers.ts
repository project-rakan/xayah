import { Page } from "../../types";
import { RouterAction, RouterActionType } from "./types";

export const routerReducer = (
    state: Page = Page.StateView,
    action: RouterAction
): Page => {
    switch (action.type) {
        case RouterActionType.SetPage: {
            return action.payload;
        }
        default:
            return state;
    }
};
