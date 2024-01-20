import React from "react";
import PropTypes from "prop-types";
import {styled, useTheme} from "styled-components";
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
    background: var(--background);
    inset: 0;

    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);

    transition: 150ms background ease-in,  150ms border-radius 250ms ease-in;
`;

function StRadioGroupItem({answerKey, children, checked}) {
    const theme = useTheme();
    const choiceRadioPrefixId = React.useId();
    const [hovering, setHovering] = React.useState(false);

    function translateX(){
        if(checked) return "0px";

        return hovering? "-16px": "-32px";
    }

    function background() {
        if(checked || hovering) {
            return theme.colors.plum7
        }

        return theme.colors.mauve4;
    }

    return (
        <Wrapper
            id={`${choiceRadioPrefixId}-${answerKey}`}
            value={answerKey}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{
                "--background": background(),
                "--border-radius": checked? "0px" : "16px"
            }}
        >
            <StRadioItemBackground 
                initial={false}
                animate={{
                    x: translateX()
                }}
                transition={{
                    type:"spring",
                    damping: 40,
                    stiffness: 300
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