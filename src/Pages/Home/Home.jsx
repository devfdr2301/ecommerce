import React from 'react'
import Additional from '../../components/Additional/Additional'
import Banner from '../../components/Banner/Banner'
import BestSellers from '../../components/BestSellers/BestSellers'
import Info from '../../components/Info/Info'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Promotion from '../../components/Promotion/Promotion'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'

const Home = () => {
  return (
    <>
      
      <Banner></Banner>
      <Info></Info>
      <Additional></Additional>
      <NewArrivals></NewArrivals>
      <BestSellers></BestSellers>
      <Promotion></Promotion>
      <SpecialOffer></SpecialOffer>
   
    </>
  )
}

export default Home