import styled, { keyframes } from 'styled-components';

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const animateCircle = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 0.1;
    transform: scale(5);
  }
`;

export const Button = styled.a`
  background: #1d63ff;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  position: relative;
  z-index: 0;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 76px;
  overflow: hidden; /* Garante que o círculo não ultrapasse os limites do botão */
  transition: background 0.3s;  

  &:hover {
    background: #155abf;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 56px; /* Tamanho do círculo */
  height: 56px; /* Tamanho do círculo */
  border-radius: 50%;
  background: #fff;
  z-index: 1;
  animation: ${animateCircle} 0.6s ease-in-out forwards;
  transition: opacity 0.3s;
  left: calc(50% - 28px); /* Centraliza o círculo horizontalmente */
  top: calc(50% - 28px); /* Centraliza o círculo verticalmente */
  opacity: 0; /* Começa invisível */
  
  /* Ativa a animação apenas no hover */
  ${Button}:hover & {
    opacity: 0.1; /* Efeito de opacidade */
  }
`;


