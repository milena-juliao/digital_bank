import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 7rem;
  gap: 3rem;
  background: #070514 center / cover no-repeat url("/backgrounds/bg_hero.png");

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
    background: #070514 center / cover no-repeat
      url("/backgrounds/bg_hero_mobile.png");
    padding: 1.7rem;
  }
`;

export const ColumnStats = styled.div`
  width: 50%;
  margin-top: 5rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

export const StatTitle = styled.h2`
  font-size: var(--font-14);
  margin-bottom: 1.5rem;

  div {
    width: 11.25rem;
    display: flex;
    padding: 0.5rem;
    border-radius: 5rem;
    border: 4px solid var(--color-blue-4);

    img {
      margin-right: 0.5rem;
    }

    @media (max-width: 1200px) {
      justify-content: center;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: var(--font-56);
  font-weight: semi-bold;
  line-height: 4.3rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1200px) {
    font-size: var(--font-32-semi);
    line-height: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: var(--font-18);
  color: #ffff;
  line-height: 1.7rem;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const Divider = styled.hr`
  width: 2rem;
  margin: 3.5rem 0;
  border: 0;
  border-top: 2px solid var(--color-blue-2);

  @media (max-width: 1200px) {
    margin: 3.5rem auto;
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const StatCard = styled.div`
  width: 30%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const StatValue = styled.h3`
  font-size: var(--font-40);
  font-weight: bold;
`;

export const StatDescription = styled.p`
  font-size: 1rem;
  color: #fff;
`;
