import React from "react";
import styled from "styled-components";
import LogoImg from "./LogoImg.png";

const NavBarWrapper = styled.header`
  background-color: #690327;
  color: white;
  display: flex;
  padding: 15px;
`;
const Logo = styled.div`
  width: 40%;
  img {
    cursor: pointer;
  }
`;

const ResourceLink = styled.div`
  display: flex;
  width: 60%;
`;
const Button = styled.button`
  width: 20%;
  font-size: 23px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
`;

const AllLinks = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const A = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export default function NavBar() {
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
