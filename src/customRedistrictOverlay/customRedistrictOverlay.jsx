
import React from "react";
import PropTypes from "prop-types";

import "./customRedistrictOverlay.css";

class CustomRedistrictOverlay extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="8759511b-71b8-4b70-a612-ae04d726717b" className="customRedistrictOverlay">        <div data-layer="eb296aa9-48d1-4d5d-a336-12e39739f320" className="enterMutators">Enter Mutators</div>
        <div data-layer="2e84b8f9-40c7-4778-95a0-4ef8300d3ae2" className="alphaValueBetaValuegammaValueEtaValueMapName">Alpha Value: <br />Beta Value:<br />Gamma Value: <br />Eta Value: <br /><br />Map Name:</div>
        <div data-layer="47e6f2e5-0579-4dbc-891d-515ac17ee00e" className="score">Score</div>
        <div data-layer="d78e7f6d-fb26-4685-b263-5a53c22bc75a" className="rectangle17"></div>
</div>

    );
  }
}

CustomRedistrictOverlay.propTypes = {

}

CustomRedistrictOverlay.defaultProps = {

}


export default CustomRedistrictOverlay;
          