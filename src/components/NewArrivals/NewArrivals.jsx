import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Product from '../Product'
import Flex from '../Flex'
import Slider from "react-slick";
import {BsArrowRight} from 'react-icons/bs'


const NewArrivals = () => {

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
  
    <div  style={{ ...style, position: 'absolute', top: '35%', right: '0px', background: "red", width: '64px', height: '64px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onClick={onClick}>
       <BsArrowRight/>
    </div>
  );
}

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>
    };
  return (
    <div>
        <Container className="max-w-container m-auto py-8 px-2.5">
            <Heading title='New Arrivals'></Heading>
            {/* <Flex className='flex gap-x-10'> */}
            <Slider {...settings}>
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
            </Slider>
                
            {/* </Flex> */}
        </Container>
    </div>
  )
}

export default NewArrivals