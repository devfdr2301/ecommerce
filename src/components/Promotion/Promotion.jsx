import React from 'react'
import Container from '../Container'
import ads from '../../assets/ads.png'
import Image from '../Image'
const Promotion = () => {
  return (
    <Container className="max-w-container m-auto py-8 px-2.5">
     <Image imgSrc={ads}/>
    </Container>
  )
}

export default Promotion