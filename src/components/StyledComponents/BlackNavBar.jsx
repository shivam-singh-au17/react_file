import React from "react";
import styled from "styled-components";
import LogoImg from "./LogoImg.png";

const NavBarWrapper = styled.header`
  background-color: black;
  color: white;
  display: flex;
  padding: 15px;
  position: relative;
`;
const Logo = styled.div`
  width: 40%;
  img {
    cursor: pointer;
  }
  @media all and (max-width: 620px) {
    display: none;
  }
  @media all and (max-width: 1000px) {
    width: 20%;
  }
`;

const ResourceLink = styled.div`
  display: flex;
  width: 60%;
  @media all and (max-width: 620px) {
    width: 100%;
  }
  @media (min-width: 620px) and (max-width: 1000px) {
    width: 80%;
  }
`;
const Button = styled.button`
  background-color: #05cbc9;
  color: white;
  border: none;
  width: 20%;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  @media all and (max-width: 620px) {
    font-size: 1rem;
  }
  @media (min-width: 620px) and (max-width: 1000px) {
    width: 25%;
  }
`;

const AllLinks = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const A = styled.a`
  text-decoration: none;
  font-size: 25px;
  color: white;
  cursor: pointer;
  @media all and (max-width: 620px) {
    font-size: 1rem;
  }
  @media (min-width: 620px) and (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

export default function BlackNavBar() {
  return (
    <NavBarWrapper>
      <Logo>
        <img height="60px" src={LogoImg} alt="Logo-Img" />
      </Logo>
      <ResourceLink>
        <Button>TRY NOW</Button>
        <AllLinks>
          <A>About Us</A>
          <A>Login</A>
          <A>Offer</A>
          <A>Contact</A>
          <A>FAQ</A>
        </AllLinks>
      </ResourceLink>
    </NavBarWrapper>
  );
}
