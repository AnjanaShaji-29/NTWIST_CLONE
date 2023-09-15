
import { LinkedIn, Twitter } from '@mui/icons-material'; // importing respective icons from icons-material
import React from 'react';
import styled from 'styled-components'; // importing styled from styled-components to style using css

// Styling Container

const Container = styled.div` 
    height:50vh;
    background-color:#081528;
    text-align: center;
    color: #6F6F92;
`;

// Styling FooterContainer

const FooterContainer = styled.div `
    padding : 60px;
`;


// Styling Navbar

const Navbar = styled.div`
    display: flex;
    margin:20px;
    justify-content:center;
    color: white;

`;

// Styling Info

const Info = styled.div`
  
    color: #6F6F92;
`;

// Styling Icons

const Icons = styled.div`
    color:white;
    margin: 25px;
`;

const Footer = () => {
    return (
      <Container>
            <FooterContainer>
                <img src= "https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" 
                    width="120px"
                />
            <Navbar>
                Home
                About Us
                Contact Us
                Privacy Policy 
                Sitemap
            </Navbar>
            <Info>
            9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
            </Info>
            <Icons>
                <Twitter fontSize="small"/>
                <LinkedIn fontSize="small" />
            </Icons>

            © 2022. Ntwist Inc.
        </FooterContainer>
      </Container>
    )
  }
  
  export default Footer;