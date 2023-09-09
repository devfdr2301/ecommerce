import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Info from '../../components/Info/Info'
import Additional from '../../components/Additional/Additional'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import BestSellers from '../../components/BestSellers/BestSellers'
import Promotion from '../../components/Promotion/Promotion'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Banner></Banner>
      <Info></Info>
      <Additional></Additional>
      <NewArrivals></NewArrivals>
      <BestSellers></BestSellers>
      <Promotion></Promotion>
      <SpecialOffer></SpecialOffer>
      <Footer></Footer>
    </>
  )
}

export default Home