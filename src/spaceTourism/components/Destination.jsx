import React from "react";
import styled from "styled-components";
import Card from "../layout/card";
import { useFetch } from "../hooks/useFetch";

export const Destination = () => {
  const { mar, fetchMar, moon, europa, titan, fetchEuropa, fetchMoon, fetchTitan } = useFetch();
  const [showMoon, setShowMoon] = React.useState(false);
  const [showMars, setShowMars] = React.useState(true);

  const [showEuropa, setShowEuropa] = React.useState(false);
  const [showTitan, setShowTitan] = React.useState(false);

  const handleMars = () => {
    setShowMoon(false);
    setShowMars(true);
    setShowEuropa(false);
    setShowTitan(false);
  };
  const handleMoon = () => {
    setShowMoon(true);
    setShowMars(false);
    setShowEuropa(false);
    setShowTitan(false);
  };
  const handleEuropa = () => {
    setShowMoon(false);
    setShowMars(false);
    setShowEuropa(true);
    setShowTitan(false);
  };
  const handleTitan = () => {
    setShowMoon(false);
    setShowMars(false);
    setShowEuropa(false);
    setShowTitan(true);
  };

  // calling from the useFetch function
  const getMarData = () => {
    fetchMar();
    fetchMoon();
    fetchTitan();
    fetchEuropa();
  };

  React.useEffect(() => {
    getMarData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ContentHead>
          <span>01</span>
          PICK YOUR DESTINATION
        </ContentHead>
        <Content>
          <ImageHolder>
            {showMars && <Image src={mar?.images?.png} />}
            {showMoon && <Image src={moon?.images?.png} />}{" "}
            {showEuropa && <Image src={europa?.images?.png} />}{" "}
            {showTitan && <Image src={titan?.images?.png} />}
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
                  name={mar?.name}
                  description={mar?.description}
                  avgTime={mar?.distance}
                  estTime={mar?.travel}
                />
              )}
              {showMoon && (
                <Card
                  name={moon?.name}
                  description={moon?.description}
                  avgTime={moon?.distance}
                  estTime={moon?.travel}
                />
              )}
              {showEuropa && (
                <Card
                  name={europa?.name}
                  description={europa?.description}
                  avgTime={europa?.distance}
                  estTime={europa?.travel}
                />
              )}
              {showTitan && (
                <Card
                  name={titan?.name}
                  description={titan?.description}
                  avgTime={titan?.distance}
                  estTime={titan?.travel}
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
  // ::after {
  //   content: "";
  //   position: absolute;
  //   height: 0.18rem;
  //   width: 100%;
  //   top: 20px;
  //   left: 0;
  //   background: whitesmoke;
  // }
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
