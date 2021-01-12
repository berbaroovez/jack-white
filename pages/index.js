import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <HomePageContainer>
      <div>
        <JackText>JACK</JackText>
        <WhiteText>WHITE</WhiteText>
      </div>
      <FrankIMG src="/images/frank.png" alt="a picture of frank kaminsky" />
      <JackIMG src="/images/jack.png" alt="a picture of jack white squating" />

      <HossIMG
        src="/images/hoss.png"
        alt="a picture of boys in Hoss Clothing"
      />
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e39d9c;
  overflow: hidden;
  text-align: center;
  position: relative;

  div {
    padding-top: 15vh;
    color: #f7ebe6;
    line-height: 12vh;
  }
`;

const JackText = styled.h1`
  font-family: "Inter";
  font-weight: 900;
  margin: 0;
  padding: 0;
  font-size: 5rem;
`;
const WhiteText = styled.h1`
  font-family: "Inter";
  font-weight: 900;
  margin: 0;
  padding: 0;
  font-size: 6.5rem;
`;

const JackIMG = styled.img`
  position: absolute;
  z-index: 2;
  margin-right: auto;
  margin-left: auto;
  left: 5vw;
  right: 0;
  bottom: -20vh;
  max-width: 95vw;
  height: auto;
  max-height: 700px;
  @media only screen and (min-width: 740px) {
    min-height: 700px;
    max-width: 55%;
    max-height: 800px;
    left: 3vw;
    bottom: -20vh;
  }

  @media only screen and (min-width: 1540px) {
    max-height: 1100px;
  }

  /* 
  @media only screen and (min-height: 750px) {
    min-height: 700px;
    max-height: 700px;
  }
  @media only screen and (min-height: 950px) {
    min-height: 1000px;
  } */
`;

const FrankIMG = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  left: -250px;
  bottom: 0;
  max-width: 95vw;
  height: auto;
  max-height: 700px;
  @media only screen and (min-width: 740px) {
    display: unset;
  }

  @media only screen and (min-width: 1540px) {
    max-height: 1200px;
  }
`;
const HossIMG = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  right: -70px;
  bottom: -70px;
  max-width: 55vw;
  height: auto;

  max-height: 700px;

  @media only screen and (min-width: 740px) {
    display: unset;
  }
  @media only screen and (min-width: 1540px) {
    max-height: 1200px;
  }
`;
