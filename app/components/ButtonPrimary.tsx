import React, { useState } from "react";
import { ButtonWrapper, Button, Circle } from "./Styled/ButtonPrimary.styled";

interface ButtonPrimaryProps {
  variant?: "primary" | "outline";
  href: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ variant = "primary", href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button href={href} variant={variant}>
        {variant === "outline" ? "Fale conosco" : "Quero ser cliente"}
        {isHovered && <Circle />}
      </Button>
    </ButtonWrapper>
  );
};

export default ButtonPrimary;