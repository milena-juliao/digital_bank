import React, { useState } from "react";
import {
  CardContainer,
  Demonstration,
  Price,
  Title,
  Divider,
  AvatarGroup,
  Avatar,
} from "./Styled/CardSolutions.styled";
import Image from "next/image";

const cardOptions = [
  { price: "R$ 999,90", title: "Balanço" },
  { price: "R$ 499,90", title: "Gastos" },
  { price: "R$ 799,90", title: "Objetivo" },
];

const CardSolutions: React.FC = () => {
  const [optionIndex, setOptionIndex] = useState(0);
  const [transitionActive, setTransitionActive] = useState(false);

  const handleMouseEnter = () => {
    setTransitionActive(true);
    setOptionIndex((prevIndex) => (prevIndex + 1) % cardOptions.length);
  };

  const handleMouseLeave = () => {
    setTransitionActive(false);
  };

  return (
    <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Demonstration>
        <div className={transitionActive ? "transition-active" : ""}>
          <Price>{cardOptions[optionIndex].price}</Price>
          <Title>{cardOptions[optionIndex].title}</Title>
        </div>
        <Image
          src={`/icons/chart.svg`}
          alt="ícone de gráfico"
          width={20}
          height={20}
        />
      </Demonstration>
      <Divider />
      <AvatarGroup>
        {[0, 1, 2, 3].map((index) => (
          <Avatar key={index}>
            <Image
              src={`/images/section_solution_avatar${index}.png`}
              alt="Fotos circulares de pessoas"
              width={35}
              height={35}
            />
          </Avatar>
        ))}
      </AvatarGroup>
    </CardContainer>
  );
};

export default CardSolutions;
