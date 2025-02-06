import styled from 'styled-components';

interface ColorProps {
  color?: string;
}

export const VantagensContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 7rem;
  gap: 5rem;
  background: #070514 center / cover no-repeat url("/backgrounds/bg_vantagens.png");

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 5rem 1.7rem;
  }
`;

export const Section = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  .topicos {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

export const VantagensHeader = styled.h1`
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 2.5rem;
  color: #fff;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 40px;
    text-align: left;
  }
`;

export const Description = styled.p<ColorProps>`
  font-family: 'Archivo', sans-serif;
  font-size: 16px;
  color: ${(props) => props.color || "black"};
  text-align: start;
`;

export const ImageWrapper = styled.div`  
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 900px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Images = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: flex-end;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  @media (max-width: 700px) {
    gap: .5rem;
  }
`;

export const CardDescription = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
`;

export const TitleCard = styled.h2<ColorProps>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.color || "black"};
  margin-bottom: 1rem;
`;

export const BarEffect = styled.div`
  width: 100%;
  background-color: #CBD6E2;
  border-radius: 10px;
  margin-top: 1rem;
  cursor: pointer;

  div {
    width: 30%;
    height: .5rem;
    background-color: #007bff;
    border-radius: 10px;
    transition: width 2s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover div, &.active div {
    width: 100%;
    background-color: #0056b3;
  }
`;