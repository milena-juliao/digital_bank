import styled from 'styled-components';

interface ColorProps {
  color?: string;
}

export const VantagensContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.7rem;
  gap: 20px;
  background: #070514 center / cover no-repeat url("/backgrounds/bg_vantagens.png");

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 5rem 7rem;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .topicos {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    width: 40%;
    align-items: flex-start;
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
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 18px;
    text-align: left;
  }
`;

export const ImageWrapper = styled.div`  
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1200px) {
    width: 60%;
    align-items: flex-end;
    gap: 4rem;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  @media (min-width: 1200px) {
    flex-direction: row;

    div:first-child {
      align-items: flex-end;
    }
  }
`;

export const CardDescription = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  text-align: center;

  @media (min-width: 1200px) {
    padding: 33px 34px;
    text-align: left;
  }
`;

export const TitleCard = styled.h2<ColorProps>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.color || "black"};
  margin-bottom: 1rem;

  @media (min-width: 1200px) {
    font-size: 24px;
  }
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