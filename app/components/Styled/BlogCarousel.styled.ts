import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 20px 0;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 21.25rem;
  object-fit: cover;
`;

export const PostContent = styled.div`
  margin-top: 10px;
`;

export const PostTitle = styled.h3`
  font-size: var(--font-16);
  font-weight: 400;
  color: #1e1c2d;
`;

export const PostExcerpt = styled.p`
  display: flex;
  gap: 1rem;
  font-size: 14px;
  color: #353345;
  margin: 8px 0;

  span:first-child {
    color: #1d63ff;
  }

  span:last-child {
    color: #000;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const AuthorName = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #000;

  span:first-child {
    font-weight: 600;
  }
`;

export const ArrowButton = styled.button`
  position: inherit;
  top: 0%;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #1d63ff;

  &:hover {
    color: #153faa;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  ::after {
    font-size: 1.5rem;
  }
`;
