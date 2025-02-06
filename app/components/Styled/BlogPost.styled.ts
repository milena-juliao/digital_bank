import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  padding: 5rem 7rem;

  @media (max-width: 768px) {
    padding: 5rem 1.7rem;
  }
`;

export const Navigation = styled.div`
  display: flex;
  color: #596573;
  gap: 5rem;
  margin-top: 5rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      color: var(--color-blue-1);

      @media(max-width: 768px){
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    a:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    margin-top: 3rem;
    font-size: var(--font-14);
  }
`;

export const PostContent = styled.div`
  width: 80%;
  margin: 1rem auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 434px;
  margin-top: 2rem;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const PostTitle = styled.h1`
  font-size: 2rem;
  margin: 20px 0;
  color: #1e1c2d;

  @media (max-width: 768px) {
    font-size: var(--font-18);
  }
`;

export const PostText = styled.div`
  width: 80%;
  margin: 2rem auto;
  font-size: 1rem;
  line-height: 1.6;
  color: #353345;

  p {
    margin-top: 2rem;

    strong {
      font-size: var(--font-24);

      @media (max-width: 768px) {
        font-size: var(--font-18);
      }
    }

  }

  figure {
    div {
      iframe {
        margin: 1rem auto;

        @media (max-width: 768px) {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: end;
  margin-top: 20px;

  p {
    color: #596573;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: .5rem;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const AuthorName = styled.p`
  font-size: 1rem;
  color: #000;
  display: flex;
  align-items: center;
  gap: .6rem;

  svg{
    width: .5rem;
    color: var(--color-blue-1);
  }

  @media (max-width: 768px) {
    font-size: var(--font-14);
  }
`;