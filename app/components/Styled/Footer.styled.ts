import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #070514 url("/backgrounds/bg_footer.png") center / cover no-repeat;
  padding: 5rem 7rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const Newsletter = styled.div`
  width: 50%;

  & > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  h3 {
    font-size: var(--font-24);
  }

  p {
    font-size: var(--font-16);
    font-weight: 400;
  }

  div{
    width: 100%;
  
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

`;

export const Links = styled.div`
  width: 15%;
  .links {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 1.5rem;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #1d63ff;
        }
      }
    }

    @media (max-width: 768px) {
      text-align: start;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      font-size: var(--font-14);
      margin-top: 3rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialLinks = styled(Links)`
  width: 15%;
  h3 {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  ul {
    margin-top: 1rem;

    li {
      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.8rem;

        span {
          @media (max-width: 768px) {
            display: none;
          }
        }

        @media (max-width: 768px) {
          flex-direction: column;
          margin-bottom: 0;
          gap: 1rem;
        }
      }

      @media (max-width: 768px) {
        margin-bottom: 0;
        gap: 1rem;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-top: 2rem;
  font-size: 14px;
  padding: 3rem 0;
  border-top: 2px solid #2a2739;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0.5rem 1rem;
  font-size: 16px;
  border-radius: 6px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;

  div {
    width: 40%;
    a {
      padding: 0.5rem 1rem;
      font-size: var(--font-14);
        @media (max-width: 768px) {
          width: 100%;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }
  }

  @media (max-width: 768px) {
    background-color: transparent;
    padding: 0;
    margin-top: 0.5rem;
    flex-direction: colunm;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  width: 80%;
  color: #070514;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 16px;
    border-radius: 6px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 16px;
  color: #cbd6e2;
`;

export const Select = styled.select`
  border: none;
  background-color: transparent;
  outline: none;
  width: auto;

  option {
    color: #000;
  }
`;
