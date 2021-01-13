import Head from "next/head";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import NavbarDesktop from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Hamburger>
        <Menu right>
          <a id="home" className="menu-item" href="">
            ABOUT
          </a>
          <a id="about" className="menu-item" href="">
            CONTACT
          </a>
          <a id="contact" className="menu-item" href="">
            GALLERY
          </a>
          <a className="menu-item--small" href="">
            STORE
          </a>
        </Menu>
      </Hamburger>
      <NavbarDesktop />
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
    </>
  );
}
const Hamburger = styled.div`
  display: block;
  @media only screen and (min-width: 770px) {
    display: none;
  }
`;

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
    @media only screen and (min-width: 740px) {
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
  @media only screen and (min-width: 740px) {
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
  @media only screen and (min-width: 740px) {
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
  @media only screen and (min-width: 740px) {
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
  @media only screen and (min-width: 740px) {
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

  @media only screen and (min-width: 740px) {
    display: unset;
  }
  @media only screen and (min-width: 1540px) {
    max-height: 900px;
  }
`;
