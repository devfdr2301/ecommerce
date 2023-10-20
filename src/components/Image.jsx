import React from 'react'

const Image = ({imgSrc,className}) => {
  return (
    <img src={imgSrc} className={className} alt="" />
  )
}

export default Image