import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import List from '../List'
import ListItem from '../ListItem'
import Flex from '../Flex'
import Container from '../Container'
import {AiOutlineBars} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const [show,setShow] = useState(false);
  const handleClick = () => {
    setShow (!show);
  }

  return (
   <>
    <nav>
      <Container className="max-w-container m-auto py-8 px-2.5">
        <Flex className='flex'>
          <div className='w-full md:w-3/12'>
            <img src={logo} alt="" />
          </div>
          <div className='w-full md:w-9/12 flex justify-end'>
            <div onClick={handleClick}>
              {
                show == true ? <RxCross2/> : <AiOutlineBars className="lg:hidden"/> 
              }
            </div>
            <div>
              <List className={`absolute lg:static duration-300 lg:flex lg:justify-end lg:gap-x-10  ${show ? 'top-14 left-4': '-top-32 left-4'}`}>
                <ListItem className="font-Sans text-sm text-secondary font-bold" ItemName="Home"/>
                <ListItem className="font-Sans text-sm text-primary hover:font-bold text-secondary duration-300 ease-in-out" ItemName="Shop"/>
                <ListItem className="font-Sans text-sm text-primary hover:font-bold text-secondary duration-300 ease-in-out" ItemName="About"/>
                <ListItem className="font-Sans text-sm text-primary hover:font-bold text-secondary duration-300 ease-in-out" ItemName="Contact"/>
                <ListItem className="font-Sans text-sm text-primary hover:font-bold text-secondary duration-300 ease-in-out" ItemName="Journal"/>
              </List>
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
   </>
  )
}

export default Navbar