import React from "react";
import QuizManager from "../QuizManager/QuizManager";

function QuizResetController() {
    const [resetCounter, setResetCounter] = React.useState(0);

    function onReset() {
        setResetCounter(resetCounter+1);
    }

    return(
        <QuizManager key={resetCounter} onReset={onReset}/>
    )
}

export default QuizResetController;