import { mockBladecallerProvider } from "./mockBladecallerProvider";
import { State } from "../../Types/atomicTypes";
import { store } from "../../redux/store";

test("Provides Mock Iowa Data", () => {
    mockBladecallerProvider.GetCurrentRedistricting({
        state: State.Iowa,
    });

    const currentState = store.getState().CurrentState;

    expect(currentState.state).toBe(State.Iowa);
    expect(currentState.fips).toBe(19);
    expect(currentState.maxDistricts).toBe(4);
});
