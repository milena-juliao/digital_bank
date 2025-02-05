import styled from "styled-components";

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-light-1);
    padding: 5rem 7rem;

    @media (max-width: 1200px) {
        padding: 1.7rem;
    }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const SmallTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #1d63ff;
  margin: 0;
`;

export const BigTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1e1c2d;
  margin: 0;
`;
