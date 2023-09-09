import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Product from '../Product'
import Flex from '../Flex'
import Slider from "react-slick";
import {BsArrowRight} from 'react-icons/bs'


const SpecialOffer = () => {
 
  return (
    <div>
        <Container className="max-w-container m-auto py-8 px-2.5">
            <Heading title='Special Offers'></Heading>
            <Flex className='flex gap-x-10'>
       
                <div className='w-[370px]'>
                    <Product></Product>
                </div>
                <div className='w-[370px]'>
                    <Product></Product>
                </div>
                <div className='w-[370px]'>
                    <Product></Product>
                </div>
                <div className='w-[370px]'>
                    <Product></Product>
                </div>
                <div className='w-[370px]'>
                    <Product></Product>
                </div>

                
            </Flex>
        </Container>
    </div>
  )
}

export default SpecialOffer