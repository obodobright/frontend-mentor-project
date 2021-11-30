import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CrewCard from "../layout/crewCard";
import { useFetchCrew } from "../hooks/fetchCrew";

export const Crew = () => {
  const { crew1, crew2, crew3, crew4, myCrew1, myCrew2, myCrew3, myCrew4 } = useFetchCrew();
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);

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

  const fetchCrew = () => {
    myCrew1();
    myCrew2();
    myCrew3();
    myCrew4();
  };

  useEffect(() => {
    fetchCrew();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>02</span> Meet your crew
        </Title>
        {c1 && (
          <CrewCard
            name={crew1?.name}
            role={crew1?.role}
            bio={crew1?.bio}
            image={crew1?.images?.png}
          />
        )}
        {c2 && (
          <CrewCard
            name={crew2?.name}
            role={crew2?.role}
            bio={crew2?.bio}
            image={crew2?.images?.png}
          />
        )}
        {c3 && (
          <CrewCard
            name={crew3?.name}
            role={crew3?.role}
            bio={crew3?.bio}
            image={crew3?.images?.png}
          />
        )}
        {c4 && (
          <CrewCard
            name={crew4?.name}
            role={crew4?.role}
            bio={crew4?.bio}
            image={crew4?.images?.png}
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
