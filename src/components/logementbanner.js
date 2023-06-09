import React from "react";
import "../styles/components/LogementBanner.css";

export default function LogementBanner(props) {
    return (
        <img className={props.className} src={props.imgSrc} alt={props.title} />
    );
}

