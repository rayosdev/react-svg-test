import * as React from "react";

export const SvgCircleStrokePie = () => {
    return (
        <>
            <svg viewBox="0 0 20 20"  style={{width:"300px", paddingTop:"80px"}}>
            <circle r="10" cx="10" cy="10" fill="white" />
            <circle r="5" cx="10" cy="10" fill="bisque"
                    stroke="tomato"
                    stroke-width="10"
                    stroke-dasharray="calc(35 * 31.42 / 100) 31.42" />
            </svg>
        </>
    )
}