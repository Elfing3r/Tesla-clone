import React from 'react'
import styled from "styled-components"
import Section from "./Section"
function Home() {
  return (
    <Container>
        <Section
        title="Model-S" description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-s.jpg"
        LeftbtnText= "Custom order"
        RightbtnText= "Existing Inventory"/>

        <Section
        title="Model-Y" description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-y.jpg"
        LeftbtnText= "Custom order"
        RightbtnText= "Existing Inventory"/>

        <Section
        title="Model-X" description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-X.jpg"
        LeftbtnText= "Custom order"
        RightbtnText= "Existing Inventory"/>

        <Section
        title="Model-3" description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        LeftbtnText= "Custom order"
        RightbtnText= "Existing Inventory"/>
        
        <Section
        title="Solar Panel" description="Lower Cost Panels in America"
        backgroundImg="/images/solar-panel.jpg"
        LeftbtnText= "Order Now"
        RightbtnText= "Learn More"/>

        <Section
        title="Solar Roof" description="Produce Clean Energy From Your Roof"
        backgroundImg="/images/solar-roof.jpg"
        LeftbtnText= "Order Now"
        RightbtnText= "Learn More"/>

        <Section
        title="Accessories" description=""
        backgroundImg="/images/accessories.jpg"
        LeftbtnText= "Shop Now"/>
    </Container>
  )
}

export default Home
const Container = styled.div`
   height: 100vh;
`