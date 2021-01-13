import NavbarDesktop from "./Navbar";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Hamburger>
        <Menu disableAutoFocus right>
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
  display: block;
  @media only screen and (min-width: 770px) and (min-height: 650px) {
    display: none;
  }
`;
