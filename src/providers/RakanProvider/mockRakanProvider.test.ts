import { State } from "../../types/atomicTypes";
import { store } from "../../redux/store";
import { mockRakanProvider } from "./mockRakanProvider";

test("Runs Mock Iowa Jobs", () => {
    mockRakanProvider.startMapJob({
        state: State.Iowa,
        GUID: "IAStartMap123",
        alpha: 11,
        beta: 22,
        gamma: 33,
        eta: 44,
    });

    const mapJobs = store.getState().MapJobs;
    const entry = mapJobs.find((job) => job.GUID === "IAStartMap123");

    expect(entry).toBeTruthy();
    expect(entry?.state).toBe(State.Iowa);
    expect(entry?.alpha).toBe(11);
    expect(entry?.beta).toBe(22);
    expect(entry?.gamma).toBe(33);
    expect(entry?.eta).toBe(44);

    expect(entry?.mapId).toBe(1);

    expect(entry?.map.has(1)).toBe(true);
});

test("Provides Mock Iowa Districts", () => {
    const map = new Map();
    map.set(1, 1);

    mockRakanProvider.requestMapScore({
        state: State.Iowa,
        GUID: "IAScoreMap123",
        alpha: 11,
        beta: 22,
        gamma: 33,
        eta: 44,
        map: map,
    });

    const mapScores = store.getState().MapScores;
    const entry = mapScores.find((score) => score.GUID === "IAScoreMap123");

    expect(entry).toBeTruthy();
    expect(entry?.state).toBe(State.Iowa);
    expect(entry?.alpha).toBe(11);
    expect(entry?.beta).toBe(22);
    expect(entry?.gamma).toBe(33);
    expect(entry?.eta).toBe(44);

    expect(entry?.score).toBe(1);
    expect(entry?.probability).toBe(0.5);

    expect(entry?.map.has(1)).toBe(true);
});
