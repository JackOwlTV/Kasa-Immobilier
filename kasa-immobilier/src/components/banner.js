import React from 'react'
import '../styles/components/Banner.css'

export default function banner(props) {
  return (
    <section className='banner'>
        <div className='overlay'></div>
        <img src={props.imgSrc} alt='Bannière'/>
        {props.title ? <h1>{props.title}</h1> : null}
    </section>
  )
}
