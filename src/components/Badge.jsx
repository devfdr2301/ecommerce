import React from 'react'

const Badge = ({title}) => {
  return (
    <span className='absolute top-5 left-5 font-Sans font-bold text-sm text-[#ffffff] bg-secondary py-2 px-8 inline-block'>{title}</span>
  )
}

export default Badge