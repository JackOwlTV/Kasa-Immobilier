import React from 'react'
import "../styles/components/ArrowBanner.css";

export default function arrowbanner(props) {
    return (
        <i onClick={props.onClick} className={props.className}></i>
    )
}
