import { UserInputActionType, UserInputAction } from "./types";
import { Page } from "../../types";

export const setAlpha = (alpha: number): UserInputAction => ({
    type: UserInputActionType.SetAlpha,
    payload: alpha,
});

export const setBeta = (beta: number): UserInputAction => ({
    type: UserInputActionType.SetBeta,
    payload: beta,
});

export const setGamma = (gamma: number): UserInputAction => ({
    type: UserInputActionType.SetGamma,
    payload: gamma,
});

export const setEta = (eta: number): UserInputAction => {
    console.log("action eta " + eta);
    return { type: UserInputActionType.SetEta, payload: eta };
};

export const setMapName = (mapName: string): UserInputAction => ({
    type: UserInputActionType.SetMapName,
    payload: mapName,
});

export const setPage = (page: Page): UserInputAction => ({
    type: UserInputActionType.SetPage,
    payload: page,
});
