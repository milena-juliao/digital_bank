"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { themeAtom } from "../state/themeAtom";
import { LightTheme } from "@/app/themes";
import {
  Content,
  FooterBottom,
  FooterContainer,
  Input,
  InputContainer,
  Links,
  Newsletter,
  Select,
  SelectContainer,
  SocialLinks,
} from "./Styled/Footer.styled";
import { FaGlobe } from "react-icons/fa6";
import ButtonPrimary from "./ButtonPrimary";

const Footer: React.FC = () => {
  const [theme] = useAtom(themeAtom);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const logoSrc =
    theme === LightTheme
      ? "/logos/logo-smartmoney-blue.png"
      : "/logos/logo-smartmoney-white.png";

  return (
    <FooterContainer>
      <Content>
        <Newsletter>
          <div>
            <Image
              src={"/icons/mail_fast.svg"}
              alt="Newsletter"
              width={30}
              height={30}
            />
            <h3>Fique por dentro das novidades</h3>
            <p>Cadastre seu e-mail para receber conteúdo</p>

            <InputContainer>
              <Input type="email" placeholder="Insira seu melhor e-mail" />
              <ButtonPrimary href="" variant="primary" />
            </InputContainer>
          </div>
        </Newsletter>
        <Links>
          <ul className="links">
            <li>
              <a href="#">Quero ser cliente</a>
            </li>
            <li>
              <a href="#">Acessar conta</a>
            </li>
            <li>
              <a href="#">Dúvidas</a>
            </li>
            <li>
              <a href="#">Termos e condições</a>
            </li>
            <li>
              <a href="#">Fale conosco</a>
            </li>
          </ul>
        </Links>
        <SocialLinks>
          <h3>Acompanhe nas redes</h3>
          <ul>
            <li>
              <a href="#">
                <Image
                  src={"/icons/twitter.svg"}
                  alt="Twitter"
                  width={30}
                  height={20}
                />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={"/icons/linkedin.svg"}
                  alt="Linkedin"
                  width={30}
                  height={20}
                />
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={"/icons/instagram.svg"}
                  alt="Instagram"
                  width={30}
                  height={20}
                />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={"/icons/facebook.svg"}
                  alt="Facebook"
                  width={30}
                  height={20}
                />
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </SocialLinks>
      </Content>
      <FooterBottom>
        {hydrated && (
          <Image src={logoSrc} alt="Logo Smart Money" width={150} height={50} />
        )}
        <p>© 2022 SmartMoney. Todos os direitos reservados</p>
        <SelectContainer>
          <FaGlobe />
          <Select>
            <option value="pt-br">Português</option>
            <option value="en-us">Inglês</option>
            <option value="es">Espanhol</option>
          </Select>
        </SelectContainer>
        <p>Desenvolvido por Insany Design</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
