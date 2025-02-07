import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f5fc;
  padding: 5rem 7rem;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 4rem 0;
  }
`;

export const Infos = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 1.7rem;
    align-items: center;
  }
`;

export const PreTitle = styled.h1`
  font-family: "Archivo";
  font-size: 14px;
  font-weight: 600;
  color: #070514;
`;

export const Title = styled.h1`
  font-family: "Archivo";
  font-size: 40px;
  font-weight: 600;
  color: #070514;

  @media (max-width: 1320px) {
    font-size: var(--font-24);
  }
`;

export const Description = styled.p`
  font-family: "Archivo";
  font-size: 16px;
  color: #413e52;
  margin-bottom: 3.75rem;

  @media (max-width: 900px) {
    font-size: var(--font-14);
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.75rem;
`;

export const IconTitle = styled.p`
  font-family: "Archivo";
  font-size: 18px;
  font-weight: 600;
  color: #413e52;
  margin-bottom: 0.25rem;
`;

export const IconText = styled.p`
  font-family: "Archivo";
  font-size: 14px;
  color: #413e52;
`;

export const QuestionsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    width: 100%;
    gap: 0;
    padding: 0 1rem;
    margin-top: 3rem;
  }
`;

export const FAQItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 900px) {
    gap: 0;
    border-bottom: 2px solid #cbd6e280;

    &:last-child {
      border: none;
    }
  }
`;

export const Question = styled.button`
  width: 100%;
  min-height: 5rem;
  background: #ffffff;
  box-shadow: 0px 15px 30px -10px rgba(76, 74, 94, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  gap: 24px;
  font-family: "Archivo";
  font-weight: 400;
  font-size: var(--font-18);
  color: #0d0b1a;
  border: none;
  cursor: pointer;

  span:first-child {
    color: #1d63ff;
  }

  span {
    font-size: 24px;

    @media (max-width: 900px) {
      font-size: var(--font-16);
    }
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 900px) {
    height: auto;
    font-size: var(--font-14);
    border-radius: 0;
    padding: 1rem;
  }
`;

export const PlusIcon = styled.span`
  font-size: 18px;
  color: #000;
  margin-left: auto;
`;

export const Answer = styled.div`
  width: 100%;
  padding: 12px 24px;
  font-family: "Archivo";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #353345;
  background-color: #fff;
  border-radius: 6px;

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
    font-size: var(--font-14);
  }
`;
