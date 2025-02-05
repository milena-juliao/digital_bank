import styled, { keyframes, css } from "styled-components";

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
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

export const Button = styled.a<{ variant: "primary" | "outline" }>`
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  position: relative;
  z-index: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 76px;
  overflow: hidden;
  transition: all 0.3s;

  ${(props) =>
    props.variant === "primary"
      ? css`
          background: #1d63ff;
          color: #ffffff;
          border: none;

          &:hover {
            background: #155abf;
          }
        `
      : css`
          background: transparent;
          color: #1d63ff;
          border: 2px solid #1d63ff;

          &:hover {
            background: #1d63ff;
            color: white;
          }
        `}

  @media (max-width: 768px) {
    padding: 12px 40px;
    font-size: 14px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  z-index: 1;
  animation: ${animateCircle} 0.6s ease-in-out forwards;
  transition: opacity 0.3s;
  left: calc(50% - 28px);
  top: calc(50% - 28px);
  opacity: 0;

  ${Button}:hover & {
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
  }
`;