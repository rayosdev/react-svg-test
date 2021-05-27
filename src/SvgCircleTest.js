import * as React from "react";

export const SvgCircleTest = () => {
    return (
        <>
        <svg viewBox="0 0 32 32" style={{width:"300px", paddingTop:"80px"}}>
            <circle r="16" cx="16" cy="16" fill="red" />
            <circle r="10" cx="16" cy="16" fill="blue" />
        </svg>
        </>
    )
}
