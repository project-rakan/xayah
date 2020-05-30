import React from "react";
import { RootState } from "../../../redux/store";
import { connect } from "react-redux";
import { MapJob } from "../../../redux/mapJobs/types";
import MapJobListItem from "./mapJobListItem";

const mapStateToProps = (state: RootState): { mapJobs: MapJob[] } => ({
    mapJobs: state.mapJobs,
});

const mapDispatchToProps = {};

interface CustomMapListProps {
    mapJobs: MapJob[];
}

class CustomMapList extends React.Component<CustomMapListProps> {
    render(): JSX.Element {
        const items = this.props.mapJobs.map((mapJob) => (
            <MapJobListItem job={mapJob} key={mapJob.id} />
        ));
        return <>{items}</>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomMapList);
