import React, { forwardRef } from "react";
import "./Tooltip.css";

const TooltipContent = forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref} className="tooltip-wrapper bottom hide">
                {React.isValidElement(props.content)
                    ? props.content 
                    : <div className="content-wrapper">{props.content}</div>}
            </div>
        </>)
})

export default TooltipContent;