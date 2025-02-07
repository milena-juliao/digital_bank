"use client";
import { useAtom } from "jotai";
import { themeAtom } from "../state/themeAtom";
import { HeaderWrapper, Nav, NavLink, SignUpButton, MenuButton, MobileNav } from "./Styled/Header.styled";
// import BtnSwitcherTheme from "../BtnSwitcherTheme/BtnSwitcherTheme";
import Image from "next/image";
import { LightTheme } from "@/app/themes";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
    const [theme] = useAtom(themeAtom);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setMobileMenuOpen(false);
        setHydrated(true);
    }, []);

    if (!hydrated) return null;

    const logoSrc =
        theme === LightTheme
            ? "/logos/logo-smartmoney-blue.png"
            : "/logos/logo-smartmoney-white.png";

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prevState) => !prevState);
    };

    return (
        <HeaderWrapper>
            {hydrated && <Image src={logoSrc} alt="Logo Smart Money" width={200} height={200} />}
            <div>
                <MenuButton onClick={toggleMobileMenu}>
                    ☰
                </MenuButton>
                <Nav>
                    <NavLink href="#quem-somos">Quem somos</NavLink>
                    <NavLink href="#solucoes">Soluções</NavLink>
                    <NavLink href="#carreira">Carreira</NavLink>
                    <NavLink href="#contato">Contato</NavLink>
                    <NavLink href="#suporte">Suporte</NavLink>
                    <SignUpButton theme={hydrated ? theme : LightTheme}>Cadastre-se</SignUpButton>
                </Nav>
                {isMobileMenuOpen && (
                    <MobileNav>
                        <NavLink href="#quem-somos">Quem somos</NavLink>
                        <NavLink href="#solucoes">Soluções</NavLink>
                        <NavLink href="#carreira">Carreira</NavLink>
                        <NavLink href="#contato">Contato</NavLink>
                        <NavLink href="#suporte">Suporte</NavLink>
                        <SignUpButton theme={hydrated ? theme : LightTheme}>Cadastre-se</SignUpButton>
                    </MobileNav>
                )}
            </div>
        </HeaderWrapper>
    );
};

export default Header;