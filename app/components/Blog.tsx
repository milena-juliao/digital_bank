import BlogCarousel from "./BlogCarousel";
import { BigTitle, BlogContainer, HeaderContainer, SmallTitle } from "./Styled/Blog.styled";

const Blog: React.FC = () => {
    return (
        <BlogContainer>
            <HeaderContainer>
                <SmallTitle>Nosso blog</SmallTitle>
                <BigTitle>Notícias do mundo da tecnologia</BigTitle>
            </HeaderContainer>
            <BlogCarousel />
        </BlogContainer>
    );
}
export default Blog;