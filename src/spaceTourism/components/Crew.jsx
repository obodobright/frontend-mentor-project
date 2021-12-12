import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CrewCard from "../layout/crewCard";
import { useFetchUrl } from "../hooks/helperHook";

export const Crew = () => {
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);

  const url = "http://localhost:3000/crew";

  const { data } = useFetchUrl(url);

  const handleC1 = () => {
    setC1(true);
    setC2(false);
    setC3(false);
    setC4(false);
  };
  const handleC2 = () => {
    setC1(false);
    setC2(true);
    setC3(false);
    setC4(false);
  };
  const handleC3 = () => {
    setC1(false);
    setC2(false);
    setC3(true);
    setC4(false);
  };
  const handleC4 = () => {
    setC1(false);
    setC2(false);
    setC3(false);
    setC4(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <span>02</span> Meet your crew
        </Title>
        {c1 && (
          <CrewCard
            name={data?.[0]?.name}
            role={data?.[0]?.role}
            bio={data?.[0]?.bio}
            image={data?.[0]?.images?.png}
          />
        )}
        {c2 && (
          <CrewCard
            name={data?.[1]?.name}
            role={data?.[1]?.role}
            bio={data?.[1]?.bio}
            image={data?.[1]?.images?.png}
          />
        )}
        {c3 && (
          <CrewCard
            name={data?.[2]?.name}
            role={data?.[2]?.role}
            bio={data?.[2]?.bio}
            image={data?.[2]?.images?.png}
          />
        )}
        {c4 && (
          <CrewCard
            name={data?.[3]?.name}
            role={data?.[3]?.role}
            bio={data?.[3]?.bio}
            image={data?.[3]?.images?.png}
          />
        )}

        <Nav>
          <Navs onClick={handleC1}>1</Navs>
          <Navs onClick={handleC2}>2</Navs>
          <Navs onClick={handleC3}>3</Navs>
          <Navs onClick={handleC4}>4</Navs>
        </Nav>
      </Wrapper>
    </Container>
  );
};

const Nav = styled.div``;
const Navs = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: gray;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const Title = styled.div`
  font-size: 30px;
  color: white;
  max-width: 1050px;
  width: 100%;
  margin: 0px auto;
  height: 300px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 1.3px;
  span {
    margin-right: 5px;
    opacity: 0.6;
  }
`;

const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("/assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  background-position: center;
`;
