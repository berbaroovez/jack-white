import Head from "next/head";
import styled from "styled-components";

import NavbarDesktop from "../components/Navbar";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <HomePageContainer id="page-wrap">
        <div>
          <JackText>JACK</JackText>
          <WhiteText>WHITE</WhiteText>
        </div>
        <FrankIMG src="/images/frank.png" alt="a picture of frank kaminsky" />
        <JackIMG
          src="/images/jack.png"
          alt="a picture of jack white squating"
        />

        <HossIMG
          src="/images/hoss.png"
          alt="a picture of boys in Hoss Clothing"
        />
      </HomePageContainer>
    </Layout>
  );
}

const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  text-align: center;
  position: relative;
  div {
    padding-top: 15vh;
    color: #f7ebe6;
    line-height: 12vh;

    //phone landscape
    @media (max-height: 500px) and (min-width: 650px) and (max-width: 850px) {
      padding-top: 5vh;
      line-height: 10vh;
    }
    //insuring that these dont mess with phone landscape mode by  setting a minimal height
    @media only screen and (min-width: 740px) and (min-height: 651px) {
      line-height: 15vh;
    }
    @media only screen and (min-width: 1440px) {
      padding-top: 12vh;
      line-height: 18vh;
    }
    @media only screen and (min-width: 1540px) {
      padding-top: 12vh;
      line-height: 20vh;
    }
    @media (min-height: 1080px) and (min-width: 1920px) {
      line-height: 13vh;
    }
  }
`;

const JackText = styled.h1`
  font-family: "Inter";
  font-weight: 900;
  margin: 0;
  padding: 0;
  font-size: 5rem;

  //phone landscape
  @media (max-height: 500px) and (min-width: 650px) and (max-width: 850px) {
    font-size: 3.5rem;
  }
  //insuring that these dont mess with phone landscape mode by  setting a minimal height
  @media only screen and (min-width: 740px) and (min-height: 651px) {
    font-size: 10rem;
  }
  @media only screen and (min-width: 1540px) {
    font-size: 13rem;
  }
  @media (min-height: 1080px) and (min-width: 1920px) {
    font-size: 10rem;
  }
`;
const WhiteText = styled.h1`
  font-family: "Inter";
  font-weight: 900;
  margin: 0;
  padding: 0;
  font-size: 6.5rem;
  //Trying to get decent results in phone landscape modes
  @media (max-height: 500px) and (min-width: 650px) and (max-width: 850px) {
    font-size: 2rem;
  }
  //insuring that these dont mess with phone landscape mode by  setting a minimal height
  @media only screen and (min-width: 740px) and (min-height: 651px) {
    font-size: 13rem;
  }

  @media only screen and (min-width: 1540px) {
    font-size: 15rem;
  }
  @media (min-height: 1080px) and (min-width: 1920px) {
    font-size: 12rem;
  }
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

  //Trying to get decent results in phone landscape modes
  @media only screen and (max-width: 850px) and (max-height: 650px) {
    min-height: 300px;
    max-width: 30%;
    max-height: 300px;
  }
  //insuring that these dont mess with phone landscape mode by  setting a minimal height
  @media only screen and (min-width: 740px) and (min-height: 651px) {
    min-height: 700px;
    max-width: 55%;
    max-height: 800px;
    left: 3vw;
    bottom: -20vh;
  }
  @media only screen and (max-height: 800px) {
    max-height: 600px;
  }
  @media only screen and (min-width: 1540px) {
    max-height: 900px;
    bottom: -30vh;
  }

  @media (min-height: 1080px) and (min-width: 1920px) {
    max-height: 900px;
  }
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

  @media only screen and (min-width: 740px) and (min-height: 1000px) {
    display: unset;
  }

  @media only screen and (min-width: 1540px) {
    max-height: 900px;
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

  @media only screen and (min-width: 740px) and (min-height: 1000px) {
    display: unset;
  }
  @media only screen and (min-width: 1540px) {
    max-height: 900px;
  }
`;
