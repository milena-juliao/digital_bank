import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5rem 7rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 2rem;
  }
`;

export const Divider = styled.div`
  width: .2rem;
  background-color: #CBD6E2;
  height: 20rem;
  align-self: center;
  margin: 0 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Banner = styled.div`
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const BannerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 32px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

export const Title = styled.h1`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  text-align: center;
  color: #070514;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #413E52;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;