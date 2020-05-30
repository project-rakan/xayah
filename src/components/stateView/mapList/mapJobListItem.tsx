import React from "react";
import { DefaultButton, Stack, IStackTokens } from "office-ui-fabric-react";
import { connect } from "react-redux";
import { Label } from "office-ui-fabric-react/lib/Label";
import { MapJob } from "../../../redux/mapJobs/types";
import { removeMapJob } from "../../../redux/mapJobs/actionCreators";
import { GUID } from "../../../types";

const mapStateToProps = (): {} => ({});

const mapDispatchToProps = {
    removeMapJob: removeMapJob,
};

const customSpacingStackTokens: IStackTokens = {
    childrenGap: "10%",
    padding: "s1 15%",
};

interface MapJobListItemProps {
    job: MapJob;
    removeMapJob: (jobID: GUID) => void;
}

class MapJobListItem extends React.Component<MapJobListItemProps> {
    render(): JSX.Element {
        return (
            <Stack horizontal tokens={customSpacingStackTokens}>
                {/* TODO add on click */}
                <Label>
                    {`${this.props.job.name}, ${this.props.job.state}`}
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
