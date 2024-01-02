import React from "react";
import PropTypes from "prop-types";

function ResetController({ControlledComponent}) {
    const [resetCounter, setResetCounter] = React.useState(0);

    function onReset() {
        setResetCounter(resetCounter+1);
    }

    return(
        <ControlledComponent key={resetCounter} onReset={onReset}/>
    )
}

ResetController.propTypes = {
    ControlledComponent: PropTypes.elementType
}

export default ResetController;