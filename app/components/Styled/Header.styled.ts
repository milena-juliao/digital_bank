import { LightTheme } from "@/app/themes";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.7rem 7rem;
  background-color: #070514;
  color: #fff;
  
  @media (max-width: 1200px) {
    padding: 1.7rem;

    img{
      width: 8rem;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const SignUpButton = styled.button`
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  background-color: ${(props) => (props.theme === LightTheme ? "#007BFF" : "#fff")};
  color: ${(props) => (props.theme === LightTheme ? "#fff" : "#000")};

  &:hover {
    opacity: 0.8;
  }
`;

export const MenuButton = styled.button`
  display: none;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
    display: block;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  right: 0;
  background-color: #070514;
  width: 200px;
  padding: 10px;
  border-radius: 0 0 5px 5px;

  a {
    margin: 10px 0;
  }
`;