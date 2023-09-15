import React from 'react';
import styled from 'styled-components';

// Styling Container

const Container = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px;
`;

// Styling InfoContainer

const InfoContainer = styled.div`
  width: 580px;
`
// Styling Title

const Title = styled.h1`
    width: 80%;
    color: #FF3A2D;
`;

// // Styling Desc

const Desc = styled.p`
  width: 560px;
  text-align: justify;
  line-height: 1.5;
  margin: 10px;
  color: black;
`;

// Styling Button

const Button = styled.button`
  background: #FF3A2D;
  color: white;
  padding:12px 24px;
  margin-top:20px;
  border:none;
  border-radius: 3px;
`;

// Styling ImageContainer

const ImageContainer = styled.div`
  height:100%;
`;

// Styling Image 

const Image = styled.img`
  width:580px;
  height:370px;
`;

const Feature = () => {
  return (
    <div>

      <Container>
            <InfoContainer>
              <Title> Mine-To-Mill-To-Mine Optimization </Title> 
              <Desc> NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in
              open pit gold mines by connecting siloed data sources like block models, fleet management systems, 
              stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, 
              identify plan/production discrepancies, and correct resource models and production plans. </Desc>
              <Button> Read More </Button>
            </InfoContainer>
            
            <ImageContainer>
              <Image src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg"/>
            </ImageContainer>
      </Container>


      <Container> 
          <ImageContainer>
            <Image src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"/>
          </ImageContainer>

          <InfoContainer>
            <Title> Sustainability </Title>
            <Desc> Environmental stewardship is a priority for NTWIST. We help our customers to 
            minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets
            to define success for our customers. </Desc>
            <Desc> With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and 
            report key metrics.</Desc>
            <Button> Read More </Button>
          </InfoContainer>
      </Container>

      <Container>
            <InfoContainer>
              <Title> Mineral Processing </Title>
              <Desc> NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and 
              reagent consumption. </Desc>
              <Button> Read More </Button>
            </InfoContainer>
            
            <ImageContainer>
              <Image src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"/>
            </ImageContainer>
      </Container>


      <Container>
            <ImageContainer>
              <Image src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"/>
            </ImageContainer>

            <InfoContainer>
              <Title> Oil & Gas </Title>
              <Desc> Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. </Desc>
              <Desc> NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety. </Desc>
              <Button> Read More </Button>
            </InfoContainer>
      </Container>
    </div>   
  
  )
}

export default Feature;