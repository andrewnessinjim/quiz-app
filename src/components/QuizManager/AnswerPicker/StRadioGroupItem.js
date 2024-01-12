import React from "react";
import PropTypes from "prop-types";
import {styled} from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { motion } from "framer-motion";

const Wrapper = styled(RadioGroup.Item)`
    --right-align-padding: -32px;

    background: none;
    border: none;
    text-align: start;
    padding: 0;
    display: block;
    position: relative;
    margin: 0;

    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: var(--left-align-padding);
    width: 100%;

    cursor: pointer;
    color: ${(p) => p.theme.colors.plum12};
`;

const StLabel = styled.label`
    cursor: pointer;
    position: relative;
    display: block;
    width: calc(100% - var(--left-align-padding) + var(--right-align-padding));
`;

const StRadioItemBackground = styled(motion.span)`
    position: absolute;
    background: ${(p) => p.theme.colors.mauve4};
    inset: 0;

    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;

    transition: 150ms background ease-in,  150ms border-radius 250ms ease-in;

    ${Wrapper}:hover & {
        background: ${(p) => p.theme.colors.plum7};
    }

    ${Wrapper}[data-state="checked"] & {
    background: ${(p) => p.theme.colors.plum7};
    /* transform: translateX(var(--checked-item-translateX)); */

    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    }
`;

function StRadioGroupItem({answerKey, children, checked}) {
    const choiceRadioPrefixId = React.useId();
    const [hovering, setHovering] = React.useState(false);

    function translateX(){
        if(checked) return "0px";

        return hovering? "-16px": "-32px"
    }
    return (
        <Wrapper
            id={`${choiceRadioPrefixId}-${answerKey}`}
            value={answerKey}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <StRadioItemBackground 
                animate={{
                    x: translateX()
                }}
                transition={{
                    type:"spring",
                    duration:0.5,
                }}
                />
            <StLabel htmlFor={`${choiceRadioPrefixId}-${answerKey}`}>
                {children}
            </StLabel>
        </Wrapper>
    )
}
StRadioGroupItem.propTypes = {
    answerKey: PropTypes.string,
    children: PropTypes.string,
    checked: PropTypes.bool
}

export default StRadioGroupItem;