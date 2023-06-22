import React from 'react'
import Banner from '../components/banner'
import Collapse from '../components/Collapse'
import Footer from '../components/footer'
import '../styles/components/CollapseZone.css'


export default function about() {
  const dropValue = [
    {
      label: "Fiablité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      label: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      label: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      label: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ]
  return (
    <div>
      <Banner imgSrc="../../assets/banner-about.png" />
      <ul className='drop-down-zone'>
        {dropValue.map((e, index) => (
          <Collapse key={index} label={e.label} description={e.description} />
        ))}
      </ul>
      <Footer />
    </div>
  )
}
