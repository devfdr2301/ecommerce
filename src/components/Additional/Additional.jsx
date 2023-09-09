import React from 'react'
import Flex from '../Flex'
import ad1 from '../../assets/ad1.png'
import ad2 from '../../assets/ad2.png'
import ad3 from '../../assets/ad3.png'
const Additional = () => {
  return (
    <div className='max-w-container m-auto py-8 px-2.5 '>
     
     <Flex className='flex'>
        <div className='w-2/4'>
          <img src={ad1} alt="" />
        </div>
         <div className='w-2/4'>
            <img src={ad2} alt="" />
            <img className='mt-8' src={ad2} alt="" />
         </div>
     </Flex>

    </div>
  )
}

export default Additional