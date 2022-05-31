import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            discription="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="CUSTOM ORDER"
            rightBtnText="EXISTING ENVENTORY"
        />
        <Section 
            title="Model Y"
            discription="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="CUSTOM ORDER"
            rightBtnText="EXISTING ENVENTORY"
        />
        <Section 
            title="Model 3"
            discription="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="CUSTOM ORDER"
            rightBtnText="EXISTING ENVENTORY"
        />
        <Section 
            title="Model X"
            discription="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="CUSTOM ORDER"
            rightBtnText="EXISTING ENVENTORY"
        />
        <Section 
            title="Lowest Cost Soler Panels in America"
            discription="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="ORDER NOW"
            rightBtnText="LERN MORE"       
        />
        <Section 
            title="Solar for New Roofs"
            discription="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="ORDER NOW"
            rightBtnText="LERN MORE"        
        />
        <Section 
            title="Accessories"
            discription=""
            backgroundImg="solar-roof.jpg"
            leftBtnText="SHOP NOW" 
        />
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`