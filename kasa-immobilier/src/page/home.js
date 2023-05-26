import React from 'react'
import '../styles/pages/Error.css'
import Banner from '../components/banner'

import Footer from '../components/footer'

export default function home() {
  return (
    <div>
      <main>
        <Banner
          imgSrc="assets/banner-home.png"
          title="Chez vous, partout et ailleurs"
        />
      </main>
      <Footer/>
    </div>
  )
}
