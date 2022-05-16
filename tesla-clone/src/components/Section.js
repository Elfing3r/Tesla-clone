import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title, description, backgroundImg, LeftbtnText, RightbtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                <Leftbutton>{LeftbtnText}</Leftbutton>
                {RightbtnText && 
                    <Rightbutton>
                    {RightbtnText}
                    </Rightbutton>
                }    
                </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}
export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background:${props => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 786px) {
        flex-direction: column;
    }
    
`
const Leftbutton = styled.div`
    background-color:black;
    opacity:0.65;
    color: white;
    height: 40px;
    width: 256px;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase:
    font-size: 12px;
    cursor: pointer;
    margin: 20px;
`

const Rightbutton= styled(Leftbutton)`
background: white;
color: black;
opacity: 0.65;`

const DownArrow = styled.img`
    height: 30px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
    `
const Buttons= styled.div``