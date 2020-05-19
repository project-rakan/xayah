import { Page } from "../../types";

export enum RouterActionType {
    SetPage = "SetPage",
}

interface SetPageAction {
    type: RouterActionType.SetPage;
    payload: Page;
}

export type RouterAction = SetPageAction;
