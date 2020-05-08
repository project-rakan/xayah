
import React from "react";
import PropTypes from "prop-types";

import "./automateRedistrictingOverlay.css";

class AutomateRedistrictingOverlay extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="f621095c-e81f-431c-91c7-f2b9d2e55378" className="automateRedistrictingOverlay">        <div data-layer="8b36523c-1d09-49b9-ac9d-cf764932fae1" className="generate">Generate</div>
        <div data-layer="12315a68-462c-47bc-9161-68b960ab181d" className="rectangle17"></div>
        <div data-layer="c131fc01-cc7c-4659-8b1f-4fea6962c855" className="enterMutators">Enter Mutators</div>
        <div data-layer="2074e3c8-cf42-48bf-ba19-0d2f0c3eb5b6" className="alphaValueBetaValuegammaValueEtaValueMapName">Alpha Value: <br />Beta Value:<br />Gamma Value: <br />Eta Value: <br /><br />Map Name:</div>
</div>

    );
  }
}

AutomateRedistrictingOverlay.propTypes = {

}

AutomateRedistrictingOverlay.defaultProps = {

}


export default AutomateRedistrictingOverlay;
          