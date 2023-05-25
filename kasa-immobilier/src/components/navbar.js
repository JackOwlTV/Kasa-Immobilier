import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/LOGO.svg'
import '../styles/Navbar.css'

export default function navbar() {
  return (
    <nav className='ki-nav'>
        <img src={Logo} alt='Kasa Immobilier' className='ki-logo'/>

        <Link to="/" className='ki-navlink'>Accueil</Link>
        <Link to="/about" className='ki-navlink'>À propos</Link>
    </nav>
    )
}
