import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 7rem;
  gap: 5rem;
  background: #fff;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
    padding: 1.7rem;
  }
`;

export const Section = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;
  position: relative;

  div:last-child {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 1200px) {
    width: 100%;
    align-items: center;
  }
`;

export const SolutionsHeader = styled.h1`
  font-family: "Archivo", sans-serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 2.5rem;
  color: #070514;

  @media (max-width: 1200px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const Description = styled.p`
  width: 75%;
  font-family: "Archivo", sans-serif;
  font-size: 18px;
  color: #353345;
  line-height: 150%;

  @media (max-width: 1200px) {
    width: 90%;
    font-size: 16px;
    text-align: center;
  }
`;

export const Bullet = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const BulletItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: "Archivo", sans-serif;
  font-size: 16px;
  color: #413e52;

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: url("/backgrounds/bg_image_solutions.png") no-repeat center center;
  background-size: cover;
  border-radius: 6px;
  box-shadow: 0px 20px 30px -10px rgba(76, 74, 94, 0.15);

  .woman {
    width: 80%;
    height: auto;
    // margin-right: 3.364rem;
  }

  .arrowUp {
    position: absolute;
    bottom: 1.5rem;
    right: 4rem;
  }

  @media (max-width: 1200px) {
    width: 35%;
    right: -20px;

    .arrowUp {
      width: 24px;
      height: 130px;
      position: absolute;
      bottom: 0%;
      right: 12%;
    }
  }

  @media (max-width: 900px) {
    width: 40%;
    right: -27px;

    .arrowUp {
      width: 20px;
      height: 120px;
      position: absolute;
      bottom: 0%;
      right: 16%;
    }
  }

  @media (max-width: 768px) {
    width: 50%;
    right: -35px .arrowUp {
      width: 18px;
      height: 110px;
      position: absolute;
      bottom: 0%;
      right: 18%;
    }
  }

  @media (max-width: 480px) {
    width: 75%;
    right: -40px .arrowUp {
      width: 16px;
      height: 100px;
      position: absolute;
      bottom: 0%;
      right: 22%;
    }
  }
`;

export const EllipsisDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #fff;
    margin: 1rem;
  }
`;
