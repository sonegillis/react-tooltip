import React, { forwardRef, useRef } from "react";
import "./Tooltip.css"
import TooltipContent from "./TooltipContent";
import { Position } from "./TooltipService";
import useTooltip from "./useTooltip";

const Tooltip = forwardRef(({content, position, children}, ref) => {
    const elRef = useRef();
    const tooltip = useTooltip();
    const handleMouseEnter = () => {
        tooltip(ref).open(position)
    }
    const handleMouseLeave = () => {
        tooltip(ref).close();
    }
    return (
        <div className="container">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={elRef} className="tooltip-element">
                {children}
            </div>
            <TooltipContent ref={ref} elRef={elRef} position={Position.TOP} content={content}></TooltipContent>
        </div>
    )
})

export default Tooltip;