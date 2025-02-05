"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
    CarouselContainer,
    StyledSwiper,
    Slide,
    PostImage,
    PostContent,
    PostTitle,
    PostExcerpt,
    AuthorContainer,
    AuthorImage,
    AuthorName,
    ArrowButton,
    Controls
} from "./Styled/BlogCarousel.styled";

interface BlogPostDetails {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
        author?: { name: string; avatar_urls: { "96": string } }[];
        "wp:term"?: { taxonomy: string; name: string }[];
    };
}

const BlogCarousel: React.FC = () => {
    const [posts, setPosts] = useState<BlogPostDetails[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetch("https://devblog.insanydesign.com/wp-json/wp/v2/posts?_embed")
            .then((res) => res.json())
            .then((data) => setPosts(data.slice(0, 8)))
            .catch((err) => console.error("Erro ao buscar posts:", err));
    }, []);

    const handleSlideClick = (postId: number) => {
        router.push(`/posts/${postId}`);
    };

    const formatDate = (dateString: string) => {
        const formattedDate = new Date(dateString)
            .toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
            .split(' ');

        formattedDate[0] = formattedDate[0].charAt(0).toUpperCase() + formattedDate[0].slice(1);

        return formattedDate.join(' ');
    };

    return (
        <CarouselContainer>
            <Controls>
                <ArrowButton className="swiper-button-prev" />
                <ArrowButton className="swiper-button-next" />
            </Controls>
            <StyledSwiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {posts.map((post) => {
                    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/fallback-image.jpg";
                    const category = post._embedded?.["wp:term"]?.find(term => term.taxonomy === "category")?.name || "Business";
                    const author = post._embedded?.author?.[0];
                    const authorName = author?.name || "Desconhecido";
                    const authorAvatar = author?.avatar_urls?.["96"] || "/fallback-avatar.jpg";

                    return (
                        <SwiperSlide key={post.id} onClick={() => handleSlideClick(post.id)}>
                            <Slide>
                                <PostImage src={featuredImage} alt={post.title.rendered} />
                                <PostContent>
                                    <PostTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    <PostExcerpt>
                                        <span>{category}</span>
                                        <span>{formatDate(post.date)}</span>
                                    </PostExcerpt>
                                    <AuthorContainer>
                                        <AuthorImage src={authorAvatar} alt={authorName} />
                                        <AuthorName>
                                            <span>{authorName}</span>
                                            <span>Autor</span>
                                        </AuthorName>
                                    </AuthorContainer>
                                </PostContent>
                            </Slide>
                        </SwiperSlide>
                    );
                })}
            </StyledSwiper>
        </CarouselContainer>
    );
};

export default BlogCarousel;
