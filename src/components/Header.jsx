import React from 'react';
import styled from 'styled-components';

//Styling Navbar

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top:0;
`;

// Styling LogoContainer

const LogoContainer = styled.div`
  margin-left: 20px;
`;

//Styling Right

const Right = styled.div`
  margin: 18px;
  color: white;
`;

// Styling Link

const Link = styled.a`
  margin: 5px;
  font-weight: bold;
  cursor: pointer;
`;


// Styling Container

const Container = styled.div`   
    height: 100vh;
    background-size: contain;
    position: relative;
`;

// Styling Wrapper

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position : absolute;
  top:25%;
  left:10%;
`;

// Styling InfoContainer

const InfoContainer = styled.div`
   width: 450px;
  height: 145px;

`;

// Styling Title

const Title = styled.h1`
  color: white;
  font-size: 38px;
  font-family: 'Inter', sans-serif;
  font-weight:700;
`;

// Styling Button

const Button = styled.button`
  color: white;
  background: #007AFF;
  padding: 10px 30px;
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  font-weight:500;
`;

// Styling ImageContainer

const ImageContainer = styled.div`
  height:100%;
`;

// Styling Image 

const Image = styled.img`
  width:660px;
`;

const Header = () => {
  return (
    <Container>
    <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png" 
    height="100%" />

    <Navbar>

        <LogoContainer>
          <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" 
            width="135px"
            height="45px"
          />
        </LogoContainer>

          <Right>
            <Link> HOME </Link>
            <Link> INDUSTRIES </Link>
            <Link> AI SOFTWARE </Link>
            <Link> BLOG </Link>
            <Link> CONTACT US </Link>
          </Right>
    </Navbar>

    <Wrapper>
      <InfoContainer>
      <Title> Data-powered solutions for Industrial Excellence </Title>
      <Button> Read More </Button>
      </InfoContainer>
      <ImageContainer>
        <Image src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"/>
      </ImageContainer>
    </Wrapper>

    </Container>
  )
}

export default Header;