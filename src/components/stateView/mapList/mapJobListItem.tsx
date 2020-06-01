import React from "react";
import { DefaultButton, Stack, IStackTokens } from "office-ui-fabric-react";
import { connect } from "react-redux";
import { Label } from "office-ui-fabric-react/lib/Label";
import { MapJob } from "../../../redux/mapJobs/types";
import { removeMapJob } from "../../../redux/mapJobs/actionCreators";
import { GUID, PrecinctID, DistrictID, MapID, State } from "../../../types";
import { replaceCurrentDistricting } from "../../../redux/currentDistricting/actionCreators";
import { RootState } from "../../../redux/store";
import { axiosBladecallerProvider } from "../../../providers/bladecallerProvider/axiosBladecallerProvider";

const mapStateToProps = (
    state: RootState
): { currentState: State; currentMapId: number } => ({
    currentState: state.currentMap.stateInfo.state,
    currentMapId: state.currentDistricting.mapID,
});

const mapDispatchToProps = {
    removeMapJob: removeMapJob,
    replaceCurrentDistricting: replaceCurrentDistricting,
};

const customSpacingStackTokens: IStackTokens = {
    childrenGap: "10%",
    padding: "s1 15%",
};

interface MapJobListItemProps {
    job: MapJob;
    currentState: State;
    currentMapId: number;
    removeMapJob: (jobID: GUID) => void;
    replaceCurrentDistricting: (newMap: {
        districtMap: Map<PrecinctID, DistrictID>;
        mapId: MapID;
    }) => void;
}

class MapJobListItem extends React.Component<MapJobListItemProps> {
    render(): JSX.Element {
        return (
            <Stack horizontal tokens={customSpacingStackTokens}>
                <Label
                    onClick={(): void => {
                        this.props.replaceCurrentDistricting({
                            districtMap: this.props.job.map,
                            mapId: this.props.job.mapId,
                        });
                        if (this.props.job.state !== this.props.currentState) {
                            axiosBladecallerProvider.getStateInfo({
                                state: this.props.job.state,
                            });
                        }
                    }}
                >
                    {`${
                        this.props.currentMapId == this.props.job.mapId
                            ? ">"
                            : " "
                    } ${this.props.job.name}, ${this.props.job.state}`}
                </Label>
                <DefaultButton
                    text="Remove"
                    onClick={(): void =>
                        this.props.removeMapJob(this.props.job.id)
                    }
                />
            </Stack>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapJobListItem);
