import React from "react";
import styled from "styled-components";
import Card from "../layout/card";
import { useFetchUrl } from "../hooks/helperHook";
import { useEventList } from "../layout/Event";

export const Destination = () => {
  const url = "http://localhost:3000/destinations";
  const { data } = useFetchUrl(url);

  const {
    handleEuropa,
    handleMars,
    handleMoon,
    handleTitan,
    showEuropa,
    showMars,
    showTitan,
    showMoon,
  } = useEventList();

  return (
    <Container>
      <Wrapper>
        <ContentHead>
          <span>01</span>
          PICK YOUR DESTINATION
        </ContentHead>
        <Content>
          <ImageHolder>
            {showMars && <Image src={data?.[1]?.images?.png} />}
            {showMoon && <Image src={data?.[0]?.images?.png} />}{" "}
            {showEuropa && <Image src={data?.[2]?.images?.png} />}{" "}
            {showTitan && <Image src={data?.[3]?.images?.png} />}
          </ImageHolder>
          <Contents>
            <LinkHolder>
              <Links onClick={handleMars} className="active">
                Mars
              </Links>
              <Links onClick={handleMoon}>Moon</Links>
              <Links onClick={handleEuropa}>Europa</Links>
              <Links onClick={handleTitan}>Titan</Links>
            </LinkHolder>
            <LinkContent>
              {showMars && (
                <Card
                  name={data?.[1]?.name}
                  description={data?.[1]?.description}
                  avgTime={data?.[1]?.distance}
                  estTime={data?.[1]?.travel}
                />
              )}
              {showMoon && (
                <Card
                  name={data?.[0]?.name}
                  description={data?.[0]?.description}
                  avgTime={data?.[0]?.distance}
                  estTime={data?.[0]?.travel}
                />
              )}
              {showEuropa && (
                <Card
                  name={data?.[2]?.name}
                  description={data?.[2]?.description}
                  avgTime={data?.[2]?.distance}
                  estTime={data?.[2]?.travel}
                />
              )}
              {showTitan && (
                <Card
                  name={data?.[3]?.name}
                  description={data?.[3]?.description}
                  avgTime={data?.[3]?.distance}
                  estTime={data?.[3]?.travel}
                />
              )}
            </LinkContent>
          </Contents>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Contents = styled.div``;

const LinkContent = styled.div`
  height: 300px;
  width: 400px;
`;

const Des = styled.div``;
const Image = styled.img`
  width: 400px;
  height: 300px;
  object-fit: contain;
  border: 0;
`;
const ImageHolder = styled.div``;
const Links = styled.div`
  color: white;
  margin: 0 20px;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;
`;
const LinkHolder = styled.div`
  display: flex;
  width: 400px;
  margin-left: -20px;
`;

const ContentHead = styled.div`
  padding-top: 20vh;
  margin-left: 15vw;
  font-size: 25px;
  letter-spacing: 1.3px;
  color: white;
  height: 70px;
  span {
    margin: 0 10px;
    color: lightgray;
    font-weight: bold;
    opacity: 0.3;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 90px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: white;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("/assets/destination/backgrounddestinationDesk.jpg");
  background-size: cover;
  background-position: center;
`;
