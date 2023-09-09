import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Dropdown from '../Dropdown'
import List from '../List'
import ListItem from '../ListItem'
import {BiSearch} from 'react-icons/bi'
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
  const [shopShow, setShopShow] = useState (false);
  const ShopHandleClick = () => {
    setShopShow(!shopShow)
  }
  const [profileShow, setProfileShow] = useState (false);
  const profileHandleClick = () => {
    setProfileShow(!profileShow)
  }
  const [cartShow, setCartShow] = useState (false);
  const cartHandleClick = () => {
    setCartShow(!cartShow)
  }

  return (  
    <div className='bg-[#F5F5F3]'>
    <Container className='max-w-container m-auto py-8 px-2.5 '>
       <Flex className="flex justify-between items-center">
        <Dropdown onClick= {ShopHandleClick} >
            <p className='font-Sans flex items-center gap-x-2.5'>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626"/>
            <path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626"/>
            </svg>
            <span className='text-sm text-secondary hidden md:block'> Shop by Category</span>
            </p>  
           {
            shopShow && 
            <List className='w-[263px] absolute bg-secondary pl-[21px] mt-4'>
              <ListItem className='py-4 text-DT hover:text-white hover:ml-2 hover:font-bold duration-300' ItemName='Accesories'/>
              <ListItem className='py-4 text-DT hover:text-white hover:ml-2 hover:font-bold duration-300' ItemName='Furniture'/>
              <ListItem className='py-4 text-DT hover:text-white hover:ml-2 hover:font-bold duration-300' ItemName='Electronics'/>
              <ListItem className='py-4 text-DT hover:text-white hover:ml-2 hover:font-bold duration-300' ItemName='Clothes'/>
              <ListItem className='py-4 text-DT hover:text-white hover:ml-2 hover:font-bold duration-300' ItemName='Bags'/>
              <ListItem className='py-4 text-DT hover:text-white hover:ml-2 hover:font-bold duration-300' ItemName='Home appliances'/>
            </List>
           }
        </Dropdown>
        <div className='relative w-auto md:w-[601px] '>
          <input type="text" className='w-full py-4 pl-[21px]' placeholder='Search Products'/>
          <BiSearch className='absolute top-[20px] right-[20px] text-2xl'/>
        </div>
        <div className='flex gap-x-8'>
         <Dropdown onClick={profileHandleClick}>     
          <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5953 3.85284C10.5953 5.98094 8.87057 7.70569 6.74248 7.70569C4.61438 7.70569 2.88963 5.98094 2.88963 3.85284C2.88963 1.72475 4.61438 0 6.74248 0C8.87057 0 10.5953 1.72475 10.5953 3.85284ZM8.93679 8.6689H9.43946C11.6729 8.6689 13.485 10.4809 13.485 12.7144V13.9666C13.485 14.7642 12.8378 15.4114 12.0401 15.4114H1.44482C0.647157 15.4114 0 14.7642 0 13.9666V12.7144C0 10.4809 1.81204 8.6689 4.04549 8.6689H4.54816C5.2194 8.97592 5.95987 9.1505 6.74248 9.1505C7.52508 9.1505 8.26856 8.97592 8.93679 8.6689Z" fill="#262626"/>
          <path d="M24.6056 6H32.3944C32.9333 6 33.2027 6.63741 32.8213 7.01097L28.9283 10.8266C28.6922 11.0578 28.3078 11.0578 28.0717 10.8266L24.1787 7.01097C23.7973 6.63741 24.0667 6 24.6056 6Z" fill="#262626"/>
          </svg>
          {
            profileShow &&
            <List className='w-[200px] h-[100px] absolute bg-white mt-4 ml-[-165px]'>
              <ListItem className='py-4 text-center text-secondary hover:text-white hover:bg-secondary  hover:font-bold duration-300' ItemName='My Account'/>
              <ListItem className='py-4 text-center text-secondary hover:text-white hover:bg-secondary  hover:font-bold duration-300' ItemName='Log Out'/>
            </List>
          } 
          </Dropdown>
          <Dropdown onClick={cartHandleClick}>
           <FaShoppingCart/>
           {
            cartShow &&
            <div className='w-[360px] h-[241px] absolute bg-secondary mt-4 ml-[-340px]'></div>
           }
          </Dropdown>
        </div>
       </Flex>
    </Container>
    </div>
  )
}

export default Header