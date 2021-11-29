import React from "react";
import styled from "styled-components";

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <ContentHead>So you want to travel to</ContentHead>
          <ContentMain>SPACE</ContentMain>
          <ContentDesc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi veritatis tempore sint
            quas adipisci praesentium mollitia recusandae veniam dignissimos quod, exercitationem
            qui similique, debitis illo placeat repellendus temporibus? Placeat, voluptatibus?
          </ContentDesc>
        </Content>
        <BoxExplore>EXPLORE</BoxExplore>
      </Wrapper>
    </Container>
  );
};
const BoxExplore = styled.div`
  width: 150px;
  height: 150px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 50%;
  margin-top: 30vh;
`;
const ContentDesc = styled.div`
  line-height: 1.5;
`;
const ContentMain = styled.div`
  font-size: 110px;
  font-weight: 600;
  letter-spacing: 1.4px;
`;
const ContentHead = styled.div`
  margin: 10px 0;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
`;
const Content = styled.div`
  color: white;
  width: 400px;
  padding: 0 20px;
  margin-top: 80px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("/assets/home/backgroundhomeDesk.jpg");
  background-size: cover;
  background-position: center;
`;
