import React from "react";
import styled from "styled-components";
import img from "../../space-tourism-website-main/starter-code/assets/crew/image-anousheh-ansari.png";

const CrewCard = ({ name, role, bio, image }) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <ContentText>
            <Occ>{role}</Occ>
            <Name>{name} </Name>
            <Desc>{bio}</Desc>
          </ContentText>
          <Image>
            <ContentImg src={image} />
          </Image>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CrewCard;
const Name = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  letter-spacing: 3px;
  font-stretch: expanded;
`;
const Occ = styled.div`
  color: white;
  font-size: 30px;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: 1.3px;
`;
const Desc = styled.div`
  width: 400px;
  color: white;
`;
const ContentText = styled.div`
  margin-left: 60px;
`;
const ContentImg = styled.img`
  width: 400px;
  height: 450px;
  object-fit: contain;
  margin-right: 50px;
`;
const Image = styled.div``;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
`;

const Wrapper = styled.div``;
const Container = styled.div``;
