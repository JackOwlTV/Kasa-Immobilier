import React from 'react'
import Banner from '../components/banner'
import CollapseZone from '../components/collapseZone'
import Footer from '../components/footer'

export default function about() {
  return (
    <div>
      <Banner imgSrc="../../assets/banner-about.png" />
      <CollapseZone />
      <Footer />
    </div>
  )
}
