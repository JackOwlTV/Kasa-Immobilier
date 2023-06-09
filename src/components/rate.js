import React from 'react'
import "../styles/components/Rate.css";

export default function rate(props) {
    return (
        <i className={`fa-solid fa-star rate ${props.color}`}></i>
    )
}
