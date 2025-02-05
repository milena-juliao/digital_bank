import styled from 'styled-components';

export const CardContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  left: -13rem;
  width: 17rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 15px 24px 24px;
  gap: 10px;
  background: #FFFFFF;
  box-shadow: 0px 8px 30px 12px rgba(76, 74, 94, 0.15);
  border-radius: 6px;

  div:first-child {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    width: 10rem;
    bottom: 1rem;
    left: -2rem;
    padding: .5rem;
    gap: .5rem;
  }
`;

export const Demonstration = styled.span`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const Price = styled.span`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #2A2739;

  @media (max-width: 1200px) {
    font-size: var(--font-14);
  }
`;

export const Title = styled.span`
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #4C4A5E;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background: #CBD6E2;
  opacity: 0.4;
`;

export const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: -5px;
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  background: #fff;
  border-radius: 50%;

  @media (max-width: 1200px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;
