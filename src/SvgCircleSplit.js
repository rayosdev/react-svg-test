import * as React from "react";
import {motion} from 'framer-motion'

export const SvgCircleSplit = () => {
        
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1
        }
    };

    return (
        <>
            <motion.svg 
                width="150" 
                height="150" 
                viewBox="0 0 150 150" 
                style={{width:"300px", paddingTop:"80px"}}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <mask id="path-1-inside-1" fill="white">
                    <path d="M150 75C150 94.8912 142.098 113.968 128.033 128.033C113.968 142.098 94.8912 150 75 150C55.1088 150 36.0322 142.098 21.967 128.033C7.90177 113.968 3.00349e-06 94.8913 0 75L75 75H150Z"/>
                </mask>
                <motion.path variants={item} d="M150 75C150 94.8912 142.098 113.968 128.033 128.033C113.968 142.098 94.8912 150 75 150C55.1088 150 36.0322 142.098 21.967 128.033C7.90177 113.968 3.00349e-06 94.8913 0 75L75 75H150Z" fill="#C4C4C4" stroke="black" stroke-width="2" mask="url(#path-1-inside-1)"/>

                <mask id="path-2-inside-2" fill="white">
                    <path d="M-6.55671e-06 75C-8.29566e-06 55.1088 7.90175 36.0322 21.967 21.967C36.0322 7.90177 55.1087 8.29566e-06 75 6.55671e-06C94.8912 4.81776e-06 113.968 7.90177 128.033 21.967C142.098 36.0322 150 55.1087 150 75L75 75L-6.55671e-06 75Z"/>
                </mask>
                <motion.path  d="M-6.55671e-06 75C-8.29566e-06 55.1088 7.90175 36.0322 21.967 21.967C36.0322 7.90177 55.1087 8.29566e-06 75 6.55671e-06C94.8912 4.81776e-06 113.968 7.90177 128.033 21.967C142.098 36.0322 150 55.1087 150 75L75 75L-6.55671e-06 75Z" fill="#C4C4C4" stroke="#red" stroke-width="2" mask="url(#path-2-inside-2)"/>
            </motion.svg>
        </>
    )
}