import React from "react";
import {
    IStackTokens,
    Label,
    IconButton,
    Stack,
    FontIcon,
} from "office-ui-fabric-react";
import { connect } from "react-redux";
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
            <Stack
                horizontal
                tokens={customSpacingStackTokens}
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
                <Stack.Item align="center">
                    {this.props.currentState == this.props.job.state ? (
                        <FontIcon iconName="RadioBtnOn" />
                    ) : (
                        <FontIcon iconName="RadioBtnOff" />
                    )}
                </Stack.Item>
                <Stack.Item align="center">
                    <Label>{this.props.job.name}</Label>
                </Stack.Item>
                <Stack.Item align="center">
                    <Label>{this.props.job.state}</Label>
                </Stack.Item>
                <Stack.Item align="center">
                    {" "}
                    <IconButton
                        iconProps={{ iconName: "Cancel" }}
                        onClick={(): void =>
                            this.props.removeMapJob(this.props.job.id)
                        }
                    />
                </Stack.Item>
            </Stack>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapJobListItem);
