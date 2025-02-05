import React from 'react';
import {
    Container,
    Banner,
    TextSection,
    Title,
    Subtitle,
    Divider,
    BannerItem
} from './Styled/BannersText.styled';
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';

interface BannerOption {
    icon: string;
    title: string;
    text: string;
    buttonType: "primary" | "outline";
}

const BannersText: React.FC = () => {
    const bannerOptions: BannerOption[] = [
        {
            icon: "/icons/money.png",
            title: "Faça parte do mercado digital financeiro!",
            text: "Pellentesque urna commodo, elementum, est nullam.",
            buttonType: "primary"
        },

        {
            icon: "/icons/notification.png",
            title: "Um time de suporte incrível para lhe atender",
            text: "Pellentesque urna commodo, elementum, est nullam.",
            buttonType: "outline"
        },
    ]
    return (
        <Container>
            {bannerOptions.map((b, index) => (
                <Banner key={index}>
                    <BannerItem>
                        <Image
                            src={b.icon}
                            alt={b.title}
                            width={64}
                            height={64}
                        />
                        <TextSection>
                            <Title>{b.title}</Title>
                            <Subtitle>{b.text}</Subtitle>
                            <ButtonPrimary href="/" variant={b.buttonType} />
                        </TextSection>
                    </BannerItem>
                    {index < bannerOptions.length - 1 && <Divider />}
                </Banner>
            ))}
        </Container>
    );
}

export default BannersText;