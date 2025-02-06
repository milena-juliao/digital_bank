"use client";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import {
    PostContainer,
    PostImage,
    PostTitle,
    PostContent,
    AuthorContainer,
    AuthorImage,
    AuthorName,
    PostText,
    Navigation
} from '../../components/Styled/BlogPost.styled';
import { FaChevronLeft, FaCircle, FaHouse } from "react-icons/fa6";
import Link from "next/link";

interface BlogPostDetails {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
        author?: { name: string; avatar_urls: { "96": string } }[];
    };
}

const BlogPost: React.FC = () => {
    const params = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPostDetails | null>(null);

    useEffect(() => {
        if (params.id) {
            const postId = parseInt(params.id, 10);

            if (!isNaN(postId)) {
                fetch(`https://devblog.insanydesign.com/wp-json/wp/v2/posts/${postId}?_embed`)
                    .then((res) => res.json())
                    .then((data) => setPost(data))
                    .catch((err) => console.error("Erro ao buscar post:", err));
            } else {
                console.error("ID inválido:", params.id);
            }
        }
    }, [params.id]);

    if (!post) return <div>Carregando...</div>;

    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/fallback-image.jpg";
    const author = post._embedded?.author?.[0];
    const authorName = author?.name || "Desconhecido";
    const authorAvatar = author?.avatar_urls?.["96"] || "/fallback-avatar.jpg";

    const formatDate = (dateString: string) => {
        const formattedDate = new Date(dateString)
            .toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
            .split(' ');

        formattedDate[0] = formattedDate[0].charAt(0).toUpperCase() + formattedDate[0].slice(1);

        return formattedDate.join(' ');
    };

    return (
        <PostContainer>
            <Navigation>
                <div>
                    <FaChevronLeft /> Voltar
                </div>
                <div>
                    <Link href={"/"}><FaHouse /></Link> /
                    <Link href={"/#blog"}>artigos</Link> /
                    <AuthorName dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </div>
            </Navigation>
            <PostContent>
                <PostTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <AuthorContainer>
                    <AuthorImage src={authorAvatar} alt={authorName} />
                    <AuthorName>
                        Por {authorName}
                        <FaCircle/>
                        {formatDate(post.date)}
                    </AuthorName>
                </AuthorContainer>
                <PostImage src={featuredImage} alt={post.title.rendered} />
                <PostText dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </PostContent>
        </PostContainer>
    );
};

export default BlogPost;
