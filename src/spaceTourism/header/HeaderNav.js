import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HeaderNav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Line></Line>
        <Navigation>
          <Nav to="/" style={{ marginLeft: "100px" }} exact activeStyle>
            Home
          </Nav>
          <Nav to="/destination">Destination</Nav>
          <Nav to="/crew">Crew</Nav>
          <Nav to="/technology">Technology</Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};
const Line = styled.div`
  height: 1px;
  width: 500px;
  background: whitesmoke;
  opacity: 0.2;
`;
const Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: blue;
  margin: 0 20px;
`;

const Nav = styled(NavLink)`
  margin: 0 30px;
  text-transform: uppercase;
  color: whitesmoke;
  text-decoration: none;
  position: relative;

  &.active {
    ::after {
      content: "";
      background: whitesmoke;
      position: absolute;
      top: 35px;
      left: 0;
      width: 100%;
      height: 0.18rem;
    }
  }
`;
const Navigation = styled.div`
  height: 60px;
  width: 700px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  //   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 1px;
  //   border: 1px solid rgba(255, 255, 255, 0.18);
  margin: ;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background: transparent;
  position: absolute;
  top: 20px;
  left: 0;
`;
