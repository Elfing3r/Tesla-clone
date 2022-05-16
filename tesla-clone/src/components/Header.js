import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/Car/CarSlice';
import {useSelector} from 'react-redux';


function Header() {
  const [BurgerStatus, setBurgerStatus]= useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Logo>
      <a><img src="/images/logo.svg"/></a>
      </Logo>
      <Leftmenu>
        {cars && cars.map((car, index)=> 
          <p key={index}><a href="#">{car}</a></p>
        )}
        {/* <p><a href="#">Model S</a></p>
        <p><a href="#">Model Y</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model 3</a></p> */}
      </Leftmenu>
      <Rightmenu>
        <p><a href="#">Shop</a></p>
        <p><a href="#">Tesla Account</a></p>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </Rightmenu>
      <BurgerNav show={BurgerStatus}>
        <CloseWrap>
          <Close onClick={()=>setBurgerStatus(false)}/>
        </CloseWrap>
        {cars && cars.map((car, index)=> 
          <li key={index}><a href="#">{car}</a></li>
        )}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div `
min-height:50px;
width: 100vw;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1;


`
const Logo = styled.div`
padding: 12px 0 0 5px;

`

const Leftmenu = styled.div`
display: flex;
justify-content: center;
align-items: center;

  p{
    font-weight: 600;
    text-transform:uppercase ;
    padding: 0 10px;

  }
  @media(max-width: 768px){
    display: none;
  }
  `

const Rightmenu = styled(Leftmenu)`
display: flex;
  p {
    padding-right: 0px;
    margin-right: 25px;
  }`

const CustomMenu= styled(MenuIcon)`
margin-right: 30px;
cursor: pointer;
`

const BurgerNav=styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 10;
font-size: 12px;
padding: 10px 10px;
list-style: none;
display: flex;
flex-direction: column;
text-align: start;
text-transform: uppercase;

li {
  padding: 10px 0;
  margin-top: 10px;
  border-bottom: 1px solid rgba(0, 0, 0,.2);
}

a {
  font-weight:600 ;
}
transform: ${props=> props.show ? 'translateX(0)' : 'translate(100%)'};
transition: transform 0.2s;

`

const Close= styled(CloseIcon)`
cursor: pointer;
`

const CloseWrap = styled.div`
display: flex;
justify-content:flex-end;`