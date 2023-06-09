import React from 'react'
import Card from './card'
import { logementList } from '../data/logementsList'
import '../styles/components/Gallery.css'

export default function gallery() {
  return (
    <div className='gallery'>
      {logementList.map((e) => (
        <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
      ))}
    </div>
  )
}
