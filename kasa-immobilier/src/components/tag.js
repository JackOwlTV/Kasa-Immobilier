import React from 'react'
import "../styles/components/Tag.css";

export default function tag(props) {
    return (
        <div className='tag'>
            <span>{props.tag}</span>
        </div>
    )
}
