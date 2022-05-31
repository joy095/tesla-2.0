// import { Translate } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'



function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)



  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {/* {cars && cars.map((car, index)=>(
          <a key={index} href="#">{car}</a>
        ))} */}
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BugerNav show={burgerStatus}>
        <CloseWraper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWraper>
        {cars && cars.map((car, index)=>(
          <li key={index}><a href="#">{car}</a></li>
        ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trad-In</a></li>
        <li><a href="#">Cybertrack</a></li>
        <li><a href="#">Roadaster</a></li>
      </BugerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 10;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
display: flex;
align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled.img`
    cursor: pointer;
    height: 40px;
    width: 40px;
    background-image: url("/images/heamer-icon.svg");
`
const BugerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s;

  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`
const CustomClose = styled.img`
  background-image: url('/images/x-icon.svg');
  height: 38px;
  width: 38px;
  background-repeat: no-repeat;
  cursor: pointer;
`
const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
`