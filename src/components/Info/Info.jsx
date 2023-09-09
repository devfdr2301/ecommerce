import React from 'react'
import Flex from '../Flex'
import {PiNumberTwoBold} from 'react-icons/pi'
import {MdLocalShipping} from 'react-icons/md'
import {RxReload} from 'react-icons/rx'
const Info = () => {
  return (
    <div className='border-2 border-[#F0F0F0] mt-[-6px]'>
        <div className='max-w-container m-auto py-8 px-2.5'>
            <Flex className='flex justify-between'>
                <Flex className='flex items-center gap-x-1 sm:gap-x-4'>
                    <PiNumberTwoBold className='text-secondary text-sm sm:text-3xl font-bold'/>
                    <p className='font-Sans text-[#6D6D6D] text-[10px] sm:text-base'>Two years warranty</p>
                </Flex>
                <Flex className='flex items-center gap-x-1 sm:gap-x-4'>
                    <MdLocalShipping className='text-secondary text-sm sm:text-3xl font-bold'/>
                    <p className='font-Sans text-[#6D6D6D] text-[10px] sm:text-base'>Free shipping</p>
                </Flex>
                <Flex className='flex items-center gap-x-1 sm:gap-x-4'>
                    <RxReload className='text-secondary text-sm sm:text-3xl font-bold'/>
                    <p className='font-Sans text-[#6D6D6D] text-[10px] sm:text-base'>Return policy in 30 days</p>
                </Flex>
            </Flex>
            </div>
    </div>
    
  )
}

export default Info