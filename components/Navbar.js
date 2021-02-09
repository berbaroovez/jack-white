import styled from "styled-components";
import Link from "next/link";
export default function NavbarDesktop() {
  return (
    <Navbar>
      <Link href="/about" passHref>
        <NavItem id="home">ABOUT</NavItem>
      </Link>
      <Link href="/contact" passHref>
        <NavItem id="about">CONTACT</NavItem>
      </Link>
      <Link href="/gallery" passHref>
        <NavItem id="contact">GALLERY</NavItem>
      </Link>
      <Link href="/store" passHref>
        <NavItem>STORE</NavItem>
      </Link>
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
