import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderImg from '../../assets/Banner.png'


const Banner = () => {
  const [dots,setActiveDots] = useState(0);
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        beforeChange: (prev, next) => {
          setActiveDots(next);
        },      
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "10px",
                padding: "10px",
                position: "absolute",
                top: "20%",
                left: "160px"
              }}
            >
            <ul>
            {dots.map((item, index) => {
                return (
                <li key={index} style={{display:'block' ,paddingTop:"60px"}}>{item.props.children}</li>
                );
            })}
            </ul> 
            </div>
          ),
          customPaging: i => (
            <div
            style={
              i == dots ? {

              height: "100px",
              width: "30px",
              color: "#000",
              borderRight: "3px #000 solid",
              paddingTop:"30px"
            }:
            {
            height: "100px",
            width: "30px",
            color: "transparent",
            borderRight: "3px #fff solid",
            paddingTop:"30px"
            }
          }
          >
            
              0{i + 1}
            </div>
          ) ,
           responsive: [
          
              {
                breakpoint: 800,
                settings: {
                  dots: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,

                beforeChange: (prev, next) => {
                  setActiveDots(next);
                },      
                appendDots: dots => (
                    <div
                      style={{
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        // padding: "10px",
                        position: "absolute",
                        top: "30%",
                        left: "17px"
                      }}
                    >
                    <ul>
                    {dots.map((item, index) => {
                        return (
                        <li key={index} style={{display:'block' ,
                        // paddingTop:"60px"
                      }}>{item.props.children}</li>
                        );
                    })}
                    </ul> 
                    </div>
                  ),
                  customPaging: i => (
                    <div
                    style={
                      i == dots ? {

                      height: "30px",
                      width: "30px",
                      color: "#000",
                      borderRight: "3px #000 solid",
                      // paddingTop:"30px"
                    }:
                    {
                    height: "30px",
                    width: "30px",
                    color: "transparent",
                    borderRight: "3px #fff solid",
                    // paddingTop:"30px"
                    }
                  }
                  >
                    
                      0{i + 1}
            </div>
          )
                }
              },
              {
                breakpoint: 600,
                settings: {
                  dots:false
                }
              },
      ]   
      };
  return (
    <div>
        <Slider {...settings} >
            <div>
              <img src={sliderImg} alt=""/>
            </div>
          <div>
            <img src={sliderImg} alt=""/>
          </div>
          <div>
            <img src={sliderImg} alt=""/>
          </div>
        </Slider>
      </div>
  )
}

export default Banner