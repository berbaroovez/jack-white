import NavbarDesktop from "./Navbar";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Hamburger>
        <Menu disableAutoFocus left>
          <Link href="/about" passHref>
            <NavA id="about" className="menu-item">
              ABOUT
            </NavA>
          </Link>
          <Link href="/contact" passHref>
            <NavA id="about" className="menu-item">
              CONTACT
            </NavA>
          </Link>
          <Link href="/gallery" passHref>
            <NavA id="contact" className="menu-item">
              GALLERY
            </NavA>
          </Link>
          <Link href="/store" passHref>
            <NavA className="menu-item--small">STORE</NavA>
          </Link>

          <NavA href="/" id="home" className="menu-item">
            HOME
          </NavA>
        </Menu>
      </Hamburger>
      <NavbarDesktop />
      {children}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e39d9c;
  overflow: hidden;
`;

const Hamburger = styled.div`
  Link {
    display: inline-block;
  }
  @media only screen and (min-width: 770px) and (min-height: 650px) {
    display: none;
  }
`;

const NavA = styled.a`
  display: inline-block;

  /* Our sidebar item styling */
  font-family: "Inter";
  font-weight: 900;
  font-size: 2rem;
  text-decoration: none;
  margin-bottom: 10px;
  color: #f7ebe6;
  transition: color 0.2s;
`;
