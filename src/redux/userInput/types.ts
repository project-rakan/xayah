import { Page } from "../../types";

export interface UserInput {
    alpha: number;
    beta: number;
    gamma: number;
    eta: number;
    mapName: string;
    page: Page;
}

export enum UserInputActionType {
    SetAlpha = "SetAlpha",
    SetBeta = "SetBeta",
    SetGamma = "SetGamma",
    SetEta = "SetEta",
    SetMapName = "SetMapName",
    SetPage = "SetPage",
}

interface SetAlphaAction {
    type: UserInputActionType.SetAlpha;
    payload: number;
}

interface SetBetaAction {
    type: UserInputActionType.SetBeta;
    payload: number;
}

interface SetGammaAction {
    type: UserInputActionType.SetGamma;
    payload: number;
}

interface SetEtaAction {
    type: UserInputActionType.SetEta;
    payload: number;
}

interface SetMapNameAction {
    type: UserInputActionType.SetMapName;
    payload: string;
}

interface SetPageAction {
    type: UserInputActionType.SetPage;
    payload: Page;
}

export type UserInputAction =
    | SetAlphaAction
    | SetBetaAction
    | SetGammaAction
    | SetEtaAction
    | SetMapNameAction
    | SetPageAction;
