import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import Badge from './Badge'
import Flex from './Flex'
import Image from './Image'

const Product = (props) => {
  const data = props.productItem
  console.log(data);
  return (
    <div>
        <div className='relative overflow-y-hidden group'>
                {/* <img src={p1} alt="" /> */}
                <Image imgSrc={data.images[0]} className='w-[370px] h-[370px] object-cover'/>
                <Badge title='New'></Badge>
                <div className='bg-[#F5F5F5] h-[156px] group-hover:bottom-0 duration-300 absolute  bottom-[-158px] w-full pt-[25px] pr-[30px]'>
                    <Flex className='flex items-center justify-end gap-x-3.5'>
                            <p className='font-Sans text-primary text-base'>Add to Wish List</p>
                            <BsFillSuitHeartFill className='text-secondary text-[20px] font-bold'/>
                    </Flex>
                    <Flex className='flex items-center justify-end gap-x-3.5 py-[21px]'>
                            <p className='font-Sans text-primary text-base'>Compare</p>
                            <BsFillSuitHeartFill className='text-secondary text-[20px] font-bold'/>
                    </Flex>
                    <Flex className='flex items-center justify-end gap-x-3.5'>
                            <p className='font-Sans text-primary text-base'>Add to Cart</p>
                            <BsFillSuitHeartFill className='text-secondary text-[20px] font-bold'/>
                    </Flex>
                </div>
        </div>
        <div className='mt-[24px]'>
            <Flex className='flex justify-between'>
                <h3 className='font-Sans font-bold text-secondary text-[20px]'>{data.title}</h3>
                <p className='font-Sans  text-primary text-[16px]'>$44.00</p>
            </Flex>
            <p className='font-Sans  text-primary text-[16px] mt-[15px]'>Black</p>
        </div>
    </div>
   
  )
}

export default Product