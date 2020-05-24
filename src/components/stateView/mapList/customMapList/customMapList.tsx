import React from "react";
import { RootState } from "../../../../redux/store";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState): {} => ({});

const mapDispatchToProps = {};

class CustomMapList extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(CustomMapList);
