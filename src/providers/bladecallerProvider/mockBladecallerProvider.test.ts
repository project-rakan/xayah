import { mockBladecallerProvider } from "./mockBladecallerProvider";
import { State } from "../../types";

test("Provides Mock Iowa Data", () => {
    const response = mockBladecallerProvider.GetCurrentRedistricting({
        state: State.Iowa,
    });
    expect(response.state).toBe(State.Iowa);
    expect(response.fips).toBe(19);
    expect(response.maxDistricts).toBe(4);
});
