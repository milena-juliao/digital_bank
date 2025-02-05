import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  padding: 5rem 7rem;
`;

export const Navigation = styled.div`
  display: flex;
  color: #596573;
  gap: 5rem;
  margin-top: 5rem;

  div{
    display: flex;
    align-items: center;
    gap: 1rem;

    p{
      color: var(--color-blue-1);
    }
    
    a:hover{
      text-decoration: underline;
    }
  }
`;

export const PostContent = styled.div`
  width: 80%;
  margin: 1rem auto;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 434px;
  margin-top: 2rem;
  object-fit: cover;
`;

export const PostTitle = styled.h1`
  font-size: 2rem;
  margin: 20px 0;
  color: #1e1c2d;
`;

export const PostText = styled.div`
  width: 80%;
  margin: 2rem auto;
  font-size: 1rem;
  line-height: 1.6;
  color: #353345;

  p{
    margin-top: 2rem;
    strong{
      font-size: var(--font-24);
    }
  }

  figure{
    div{
      iframe{
        margin: 1rem auto;
      }
    }
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: end;
  margin-top: 20px;
  
  p{
    position: relative;
    color: #596573;

    span{
      margin: 0 2rem 0 .5rem;
    }

    span::after {
      content: '';
      position: absolute;
      bottom: .5rem;
      left: 7.5rem;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--color-blue-1);
    }
  }
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const AuthorName = styled.p`
  font-size: 1rem;
  color: #000;
`;