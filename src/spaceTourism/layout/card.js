import React from "react";
import styled from "styled-components";

const Card = ({ name, description, avgTime, estTime }) => {
  return (
    <Container>
      <Wrapper>
        <DestinationName>{name}</DestinationName>
        <DestinationDesc>{description}</DestinationDesc>
        <TravelTime>
          <AveTime>
            <Text>Avg.Distance</Text>
            <Time>{avgTime}</Time>
          </AveTime>
          <AveTime>
            <Text>Est. travel Time</Text>
            <Time>{estTime}</Time>
          </AveTime>
        </TravelTime>
      </Wrapper>
    </Container>
  );
};
export default Card;
const Time = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.6px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1.6px;
  opacity: 0.6;
  text-transform: uppercase;
`;
const AveTime = styled.div``;
const TravelTime = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  position: relative;
  ::before {
    content: "bright";
    position: absolute;
    top: 20px;
  }
`;
const DestinationDesc = styled.div`
  width: 400px;
  margin: 10px 0;
  font-size: 17px;
  letter-spacing: 1.2px;
`;
const DestinationName = styled.div`
  font-size: 80px;
  margin: 10px 0;
  font-weight: bold;
  text-align: left;
  width: 400px;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
