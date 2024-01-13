import React from "react";

function useReset(){
    const [counter, setCounter] = React.useState(0)

    function reset(){
        setCounter(counter + 1);
    }

    return [counter, reset];
}

export default useReset;