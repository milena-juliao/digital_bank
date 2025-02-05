import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 7rem;
  gap: 3rem;
  top: 0;
  background-color: #fff;
  flex-wrap: wrap;

  @media (max-width: 900px){
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.7rem;
  }
`;

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 900px){
        align-items: center;
    }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem;
  width: 15.5rem;
  margin-top: 1rem;
`;

export const Title = styled.h2`
  width: 100%;  
  font-family: "Archivo", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: #1e1c2d;
  margin: 0;
`;

export const Description = styled.p`
  font-family: "Archivo", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #353345;
  margin: 0;
`;
