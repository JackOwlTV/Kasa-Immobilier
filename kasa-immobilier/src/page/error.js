import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/pages/Error.css'

export default function error() {
  return (
    <div>
      <main className='error404'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={"/"}>
           <span> Retourner sur la page d'accueil</span>
        </Link>
      </main>
    </div>
  )
}
