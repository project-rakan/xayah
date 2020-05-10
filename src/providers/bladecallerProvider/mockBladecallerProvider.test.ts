import { mockBladecallerProvider } from "./mockBladecallerProvider";
import { State, JobType, GUID } from "../../types";
import { store } from "../../redux/store";

test("Provides Mock Iowa Info", () => {
    mockBladecallerProvider.getStateInfo({
        state: State.Iowa,
    });

    const currentState = store.getState().currentState;

    expect(currentState.stateInfo.state).toBe(State.Iowa);
    expect(currentState.stateInfo.fips).toBe(19);
    expect(currentState.stateInfo.maxDistricts).toBe(4);
});

test("Provides Mock Iowa Districts", () => {
    mockBladecallerProvider.getDistricting({
        state: State.Iowa,
        mapId: 0,
    });

    const currentDistricting = store.getState().currentDistricting;

    expect(currentDistricting.districtMap.get(1)).toBe(1);
});

test("Produces Mock GUIDs", async () => {
    const response: GUID = await mockBladecallerProvider.createGuid({
        state: State.Iowa,
        jobType: JobType.StartMap,
    });

    expect(response).toBe(State.Iowa + JobType.StartMap + "123");
});
