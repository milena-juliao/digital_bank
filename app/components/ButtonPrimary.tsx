import React, { useState } from 'react';
import { ButtonWrapper, Button, Circle } from './Styled/ButtonPrimary.styled';

const ButtonPrimary: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <ButtonWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Button href={"/"}>
          Quero ser cliente
          {isHovered && <Circle />}
        </Button>
      </ButtonWrapper>
    );
  };
  
  export default ButtonPrimary;