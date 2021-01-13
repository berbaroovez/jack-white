import styled from "styled-components";

export default function NavbarDesktop() {
  return (
    <Navbar>
      <NavItem id="home" href="/about">
        ABOUT
      </NavItem>
      <NavItem id="about" href="/about">
        CONTACT
      </NavItem>
      <NavItem id="contact" href="">
        GALLERY
      </NavItem>
      <NavItem className="menu-item--small" href="">
        STORE
      </NavItem>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: none;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;

  text-align: center;
  font-family: "Inter";
  font-weight: 900;
  font-size: 1.2rem;
  color: #f7ebe6;

  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 5rem;
  padding-top: 1rem;

  @media only screen and (min-width: 770px) and (min-height: 651px) {
    display: grid;
  }
`;
const NavItem = styled.a`
  &:hover {
    color: white;
  }
`;
