import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../assets/LOGO.svg'
import '../styles/Navbar.css'

export default function navbar() {
  return (
    <header>
      <nav>
        <div className='logo'>
          <NavLink to={'/'} >
            <img src={Logo} alt='Kasa Immobilier' />
            </NavLink>     
        </div>
        <ul>
          <li>
            <NavLink to={'/'} className={(nav) => (nav.isActive ? "nav-active" : "")} >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={(nav) => (nav.isActive ? "nav-active" : "")} >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    )
}
